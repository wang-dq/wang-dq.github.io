function textView(x, y, content, angle) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("fontSize", 12);
  text.setAttribute("fill", "#000");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("alignment-baseline", "central");

  if (angle != undefined) {
    text.setAttribute(
      "transform",
      `rotate(${angle * 180 / Math.PI}, ${x}, ${y})`
    );
  }
  text.innerHTML = content;
  return text;
}

export default textView;
