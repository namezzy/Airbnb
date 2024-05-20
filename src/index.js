import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { HashRouter } from "react-router-dom";

import "normalize.css";
import "./assets/css/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading....">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);
