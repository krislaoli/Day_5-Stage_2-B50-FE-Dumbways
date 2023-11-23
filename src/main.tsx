import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "./dist/navbar.css";
import "./dist/HomePage.css";
import "./dist/JumbotronComponent.css";
import "./dist/CardComponent.css";
import "./dist/DetailBlogPage.css";
import "./dist/TextStyle.css";
import "./dist/Footer.css";
import "./dist/votepage.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
