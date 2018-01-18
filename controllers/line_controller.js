import lineView from "../views/line_view";
import textView from "../views/text_view";

function lineController(item) {
  let { id, prevs, nexts, attribute, text } = item;

  let prev = graphData.find(item => {
    return item.id == prevs;
  });
  let next = graphData.find(item => {
    return item.id == nexts[0];
  });

  let prevX = prev.attribute.x;
  let prevY = prev.attribute.y;
  let prevR = prev.attribute.width / 2;
  let nextX = next.attribute.x;
  let nextY = next.attribute.y;
  let nextR = next.attribute.width / 2;

  let gapWidth = nextX - prevX;
  let gapHeight = nextY - prevY;
  let angle = Math.atan(gapWidth / gapHeight);
  let startX, startY, endX, endY;
  if ((gapWidth < 0 && gapHeight < 0) || (gapWidth > 0 && gapHeight < 0)) {
    startX = prevX - Math.sin(angle) * prevR;
    startY = prevY - Math.cos(angle) * prevR;
    endX = Math.sin(angle) * (nextR + 10) + nextX;
    endY = Math.cos(angle) * (nextR + 10) + nextY;
  } else {
    startX = Math.sin(angle) * prevR + prevX;
    startY = Math.cos(angle) * prevR + prevY;
    endX = nextX - Math.sin(angle) * (nextR + 10);
    endY = nextY - Math.cos(angle) * (nextR + 10);
  }

  const textX = (endX - startX) / 2;
  const textY = (endY - startY) / 2 - 12;

  let g = document.getElementById(id);
  if (g) {
    g.innerHTML = "";
  } else {
    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.id = id;
  }

  g.setAttribute("transform", `translate(${startX},${startY})`);
  let line = lineView(endX - startX, endY - startY);
  g.appendChild(line);
  if (text) {
    let textNode = textView(textX, textY, text, angle);
    g.appendChild(textNode);
  }
  return g;
}

export default lineController;
