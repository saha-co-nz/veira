import veiraTemplate from "./veira/veira-template.js";
import "./veira/veira.css";
import { initVeira } from "./veira/veira.js";

const root = document.getElementById("root");

if (root) {
  root.innerHTML = veiraTemplate;
  initVeira();
}
