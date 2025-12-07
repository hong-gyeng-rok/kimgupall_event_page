import "./App.css";
import App from "./App.jsx";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ImageDataProvider } from "./context/ImageDataContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ImageDataProvider>
      <BrowserRouter basename="/kimgupall_event_page">
        <App />
      </BrowserRouter>
    </ImageDataProvider>
  </StrictMode>,
);
