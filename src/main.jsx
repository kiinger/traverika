import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const root = document.querySelector("#root");
console.log(root);
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
