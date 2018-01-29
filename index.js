import "babel-polyfill";
import TuopuIndex from "./tuopo/index.js";

window.graphData = [];
window.tuopuTree = new TuopuIndex();
window.container = document.getElementById("container");
window.svg = document.getElementById("svg");
window.attributeModal = document.getElementById("attributes");

var svgX = 0,
  svgY = 0,
  scale = 1,
  slecteElement = "",
  selectData = "",
  moveType = "",
  source = { x: 0, y: 0 },
  selectednNexts = [];

let data =
  '[{"id":"1","type":"node","prevs":"","nexts":["l1","l2","l3"],"text":"1","attribute":{"x":600,"y":130,"width":60,"height":60}},{"id":"2","type":"node","prevs":"l1","nexts":["l4","l5","l6"],"text":"2","attribute":{"x":300,"y":290,"width":60,"height":60}},{"id":"3","type":"node","prevs":"l2","nexts":["l7","l8","l9"],"text":"3","attribute":{"x":600,"y":290,"width":60,"height":60}},{"id":"4","type":"node","prevs":"l3","nexts":["l10","l11","l12"],"text":"4","attribute":{"x":900,"y":290,"width":60,"height":60}},{"id":"5","type":"node","prevs":"l4","nexts":[],"text":"5","attribute":{"x":200,"y":450,"width":60,"height":60}},{"id":"6","type":"node","prevs":"l5","nexts":[],"text":"6","attribute":{"x":300,"y":450,"width":60,"height":60}},{"id":"7","type":"node","prevs":"l6","nexts":[],"text":"7","attribute":{"x":400,"y":450,"width":60,"height":60}},{"id":"8","type":"node","prevs":"l7","nexts":[],"text":"8","attribute":{"x":500,"y":450,"width":60,"height":60}},{"id":"9","type":"node","prevs":"l8","nexts":[],"text":"9","attribute":{"x":600,"y":450,"width":60,"height":60}},{"id":"10","type":"node","prevs":"l9","nexts":[],"text":"10","attribute":{"x":700,"y":450,"width":60,"height":60}},{"id":"11","type":"node","prevs":"l10","nexts":[],"text":"11","attribute":{"x":800,"y":450,"width":60,"height":60}},{"id":"12","type":"node","prevs":"l11","nexts":[],"text":"12","attribute":{"x":900,"y":450,"width":60,"height":60}},{"id":"13","type":"node","prevs":"l12","nexts":[],"text":"13","attribute":{"x":1000,"y":450,"width":60,"height":60}},{"id":"l1","type":"line","prevs":"1","nexts":["2"],"text":"l1"},{"id":"l2","type":"line","prevs":"1","nexts":["3"],"text":"l2"},{"id":"l3","type":"line","prevs":"1","nexts":["4"],"text":"l3"},{"id":"l4","type":"line","prevs":"2","nexts":["5"],"text":"l4"},{"id":"l5","type":"line","prevs":"2","nexts":["6"],"text":"l5"},{"id":"l6","type":"line","prevs":"2","nexts":["7"],"text":"l6"},{"id":"l7","type":"line","prevs":"3","nexts":["8"],"text":"l7"},{"id":"l8","type":"line","prevs":"3","nexts":["9"],"text":"l8"},{"id":"l9","type":"line","prevs":"3","nexts":["10"],"text":"l9"},{"id":"l10","type":"line","prevs":"4","nexts":["11"],"text":"l10"},{"id":"l11","type":"line","prevs":"4","nexts":["12"],"text":"l11"},{"id":"l12","type":"line","prevs":"4","nexts":["13"],"text":"l12"}]';
tuopuTree.init(data);

svg.onclick = e => {
  let node = queryNodeByEventWithClassName(e, "element");
  if (node) {
    slecteElement = node;
  } else {
    moveType = "";
  }
};
svg.ondblclick = e => {
  if (!slecteElement) {
    return;
  }
  selectData = graphData.find(item => item.id == slecteElement.id);
  if (selectData.type == "node") {
    attributeModal.setAttribute("class", "attributes show node");
  } else if (selectData.type == "line") {
    attributeModal.setAttribute("class", "attributes show line");
  }
};
svg.onmousedown = e => {
  if (queryNodeByEventWithClassName(e, "line-element")) {
    slecteElement = queryNodeByEventWithClassName(e, "line-element");
  } else if (queryNodeByEventWithClassName(e, "node_element")) {
    slecteElement = queryNodeByEventWithClassName(e, "node_element");
    let id = slecteElement.getAttribute("id");
    let selectData = graphData.find(item => item.id == id);
    source = { x: selectData.attribute.x, y: selectData.attribute.y };
    moveType = "node";
  } else if (queryNodeByEventWithClassName(e, "graph")) {
    moveType = "view";
  }
};
svg.onmousemove = e => {
  if (!moveType) {
    return;
  } else if (moveType == "view") {
    svgX += e.movementX;
    svgY += e.movementY;
    container.setAttribute(
      "transform",
      `translate(${svgX}, ${svgY}) scale(${scale})`
    );
  } else if (moveType == "node") {
    container.appendChild(slecteElement);
    let id = slecteElement.getAttribute("id");
    source.x += e.movementX;
    source.y += e.movementY;
    let axis = { x: source.x, y: source.y };
    tuopuTree.move(id, axis);
  }
};
svg.onmouseup = e => {
  moveType = "";
};
svg.onkeyup = e => {
  let code = e.keyCode || e.which;
  if (code == 8 || code == 46) {
    if (slecteElement) {
      selectData = graphData.find(item => item.id == slecteElement.id);
      if (selectData.type == "node") {
        document.getElementById(selectData.id).remove();
        graphData = graphData.filter(item => item.id != selectData.id);
        selectData.prevs &&
          document.getElementById(selectData.prevs) &&
          document.getElementById(selectData.prevs).remove();
        graphData = graphData.filter(item => item.id != selectData.prevs);
        selectednNexts = [];
        getNexts(selectData.nexts);
        selectednNexts.map(id => {
          document.getElementById(id) && document.getElementById(id).remove();
          graphData = graphData.filter(item => item.id != id);
        });
      }
    }
  }
};
svg.onwheel = e => {
  let delta = 0;
  delta = e.wheelDelta ? e.wheelDelta : deltaY ? deltaY : 0;
  if (delta > 0) {
    scale = scale >= 1.5 ? 1.5 : scale + 0.01;
  } else {
    scale = scale <= 0.5 ? 0.5 : scale - 0.01;
  }
  container.setAttribute(
    "transform",
    `translate(${svgX}, ${svgY}) scale(${scale})`
  );
};

function queryNodeByEventWithClassName(evt, className) {
  let node = evt.target;
  let path = [];
  while (node instanceof SVGElement) {
    path.push(node);
    node = node.parentNode;
  }
  return path.reduce((prev, curr) => {
    if (prev) return prev;
    let classes = curr.getAttribute("class");
    return classes && classes.split(" ").indexOf(className) !== -1
      ? curr
      : null;
  }, null);
}
//增加节点
document.getElementById("add").onclick = () => {
  tuopuTree.addNode(selectData);
  attributeModal.setAttribute("class", "attributes");
};
//节点修改
document.getElementById("sure").onclick = () => {
  let text = document.getElementById("text");
  let color = document.getElementById("color");
  selectData.text = text.value;
  selectData.attribute.fillColor = color.value;
  if (selectData.type == "node") {
    let radius = parseFloat(document.getElementById("radius").value);
    selectData.attribute.width = 2 * radius;
    selectData.attribute.height = 2 * radius;
    tuopuTree.move(selectData.id, {
      x: selectData.attribute.x,
      y: selectData.attribute.y
    });
  } else if (selectData.type == "line") {
    tuopuTree.updateLine(selectData);
  }
  attributeModal.setAttribute("class", "attributes");
};
//关闭弹框
document.getElementById("close").onclick = () => {
  attributeModal.setAttribute("class", "attributes");
};
function getNexts(nexts) {
  if (nexts.length) {
    nexts.forEach(id => {
      selectednNexts.push(id);
      let nextElement = graphData.find(item => item.id == id);
      nextElement &&
        nextElement.nexts &&
        nextElement.nexts.length &&
        getNexts(nextElement.nexts);
    });
  }
}
