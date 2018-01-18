import "babel-polyfill";
import TuopuIndex from "./tuopo/index.js";

window.graphData = [];
window.tuopuTree = new TuopuIndex();
window.container = document.getElementById("container");
