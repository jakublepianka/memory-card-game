import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "normalize.css";
import "./styles/animations.css";
import App from "./App.jsx";
import "./styles/mediaQueries.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
