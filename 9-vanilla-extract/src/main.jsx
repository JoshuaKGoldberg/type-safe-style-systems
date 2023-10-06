import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { themeClass } from "./theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={themeClass} id="theme">
      <App />
    </div>
  </React.StrictMode>
);
