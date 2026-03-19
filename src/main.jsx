import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./home-page/home-page-main.jsx";
import EnquirePageMain from "./enquire-page/enquire-page-main.jsx";
import "./index.css";

const App = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash === "#/enquire" ? <EnquirePageMain /> : <HomePage />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
