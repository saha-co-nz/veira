import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./home-page/home-page-main.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
