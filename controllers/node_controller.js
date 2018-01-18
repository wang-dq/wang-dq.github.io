import circleView from "../views/circle_view";
import textView from "../views/text_view";

function nodeController(node) {
  let { id, attribute, text } = node;
  let { x, y, width, height } = attribute;
  let translateX = x - width / 2;
  let translateY = y - height / 2;
  let g = document.getElementById(id);
  if (!g) {
    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.id = id;
  }

  g.setAttribute("transform", `translate(${translateX}, ${translateY})`);
  let circle = circleView(width / 2, height / 2, width / 2);
  g.appendChild(circle);
  if (text) {
    let textNode = textView(width / 2, height / 2, text);
    g.appendChild(textNode);
  }
  return g;
}
export default nodeController;
