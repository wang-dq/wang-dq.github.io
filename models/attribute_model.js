class AttributeModel {
  constructor(attr) {
    let { x, y, width, height, text, fillColor } = attr;
    this.x = x || 10;
    this.y = y || 10;
    this.width = width || 60;
    this.height = height || 60;
    this.text = text || "";
    this.fillColor = fillColor || "#0095DD";
  }
}

export default AttributeModel;
