import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";




ReactDOM.render(
  <React.Suspense fallback={<div>Loading... </div>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
