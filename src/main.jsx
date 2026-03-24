import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VeiraApp from "./veira/VeiraApp.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VeiraApp />
  </StrictMode>,
);
