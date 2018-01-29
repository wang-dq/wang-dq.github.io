import { guid } from "../common/utils";
import AttributeModel from "./attribute_model";

class ElementModel {
  constructor(obj) {
    let { id, type, prevs, nexts, text, attribute } = obj;
    this.id = id || guid();
    this.type = type || "";
    this.prevs = prevs || "";
    this.nexts = nexts || [];
    this.text = text || "";
    this.attribute = attribute
      ? new AttributeModel(attribute)
      : new AttributeModel({});
  }
}

export default ElementModel;
