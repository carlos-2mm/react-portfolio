import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// Importing the font CSS
import "@fontsource/poppins/400.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
