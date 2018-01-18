class AttributeModel {
  constructor(attr) {
    let { x, y, width, height, text } = attr;
    this.x = x || 10;
    this.y = y || 10;
    this.width = width || 60;
    this.height = height || 60;
    this.text = text || "";
  }
}

export default AttributeModel;
