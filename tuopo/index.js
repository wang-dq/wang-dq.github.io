import ElementModel from "../models/element_model";
import nodeController from "../controllers/node_controller";
import lineController from "../controllers/line_controller";
class topuTree {
  init(data) {
    container.innerHTML = "";
    graphData = JSON.parse(data).map(item => {
      return new ElementModel(item);
    });
    graphData.map(item => {
      let { type } = item;
      if (item.type == "node") {
        container.appendChild(nodeController(item));
      } else if (type == "line") {
        container.appendChild(lineController(item));
      }
    });
  }
  addNode(prevNode) {
    let lineElement = new ElementModel({ type: "line", prevs: prevNode.id });
    let element = new ElementModel({ type: "node", prevs: lineElement.id });
    lineElement.nexts = [element.id];
    graphData.push(element, lineElement);
    container.appendChild(nodeController(element));
    container.appendChild(lineController(lineElement));
  }
  updateLine(lineElement) {
    lineController(lineElement);
  }
  move(id, axis) {
    let { x, y } = axis;
    graphData.map(item => {
      if (item.id == id && item.type == "node") {
        item.attribute.x = x;
        item.attribute.y = y;
        nodeController(item);
        let prevElement = graphData.find(prev => {
          return prev.id == item.prevs;
        });
        prevElement && lineController(prevElement);
        item.nexts.map(id => {
          let nextElement = graphData.find(item => {
            return item.id == id;
          });
          nextElement && lineController(nextElement);
        });
      }
    });
  }
  getInfo(id) {
    if (id) {
      let data = graphData.find(item => {
        return item.id == id;
      });
      return data ? JSON.stringify(data) : null;
    } else {
      return JSON.stringify(graphData);
    }
  }
}
export default topuTree;
