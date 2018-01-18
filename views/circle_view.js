function circleView(x, y, radius) {
  let cx = x || 0;
  let cy = y | 0;
  let r = radius || 30;
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", "#0095DD");
  circle.setAttribute("stroke", "#0095DD");
  circle.setAttribute("strokeWidth", "2px");
  return circle;
}

export default circleView;
