import veiraTemplate from "./veira/veira-template.html?raw";
import "./veira/veira.css";
import { initVeira } from "./veira/veira.js";

const root = document.getElementById("root");

if (root) {
  root.innerHTML = veiraTemplate;
  initVeira();
}
