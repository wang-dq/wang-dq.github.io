import Circle from "./circle";

class topuTree {
  create(obj) {
    data.map(dataItem => {
      if (obj && obj.id == dataItem.id) {
        val.id = "";
      }
    });
    let clData = new Circle(obj);
    data.push(clData);
    let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    g.appendChild(this.draw(circle, clData));
  }
  query(id) {
    if (id) {
      for (let item of data) {
        if (item.id == id) {
          return item;
        }
      }
      return null;
    }
    return data;
  }
  delete(id) {
    if (id) {
      data.map((item, index) => {
        if (item.id == id) {
          data.splice(index, 1);
          g.removeChild(document.getElementById(id));
        }
      });
    } else {
      data = [];
      g.innerHTML = "";
    }
  }
  update(obj) {
    if (obj && obj.id) {
      let clData = new Circle(obj);
      data.map(item => {
        if (item.id == obj.id) {
          this.draw(document.getElementById(obj.id), clData);
          return clData;
        }
      });
    }
  }
  draw(circle, clData) {
    circle.id = clData.id;
    circle.setAttribute("cx", clData.cx);
    circle.setAttribute("cy", clData.cy);
    circle.setAttribute("r", clData.r);
    circle.setAttribute("fill", clData.fill);
    circle.setAttribute("stroke", clData.stroke);
    circle.setAttribute("strokeWidth", clData.strokeWidth);
    return circle;
  }
}
export default topuTree;
