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
  move(id, axis) {
    let { x, y } = axis;
    let element = graphData.find(item => {
      item.id == id;
    });
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
      return graphData.find(item => {
        return item.id == id;
      });
    } else {
      return graphData;
    }
  }
}
export default topuTree;
