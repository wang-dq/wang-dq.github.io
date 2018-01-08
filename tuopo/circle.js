import uuid from "uuid";
export default class Circle {
  constructor(obj) {
    this.id = (obj && obj.id) || uuid.v4();
    this.cx = (obj && obj.cx) || 20;
    this.cy = (obj && obj.cy) || 20;
    this.r = (obj && obj.r) || 20;
    this.fill = (obj && obj.fill) || "#0095DD";
    this.stroke = (obj && obj.stroke) || "#0095DD";
    this.strokeWidth = (obj && obj.strokeWidth) || "2px";
  }
}
