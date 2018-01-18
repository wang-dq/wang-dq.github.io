function lineView(x2, y2) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 0);
  line.setAttribute("y1", 0);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#000");
  line.setAttribute("strokeWidth", "2px");
  line.setAttribute("marker-end", "url(#arrow)");
  return line;
}

export default lineView;
