import "./App.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ImageDataProvider } from "./context/ImageDataContext";
import App from "./App.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ImageDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImageDataProvider>
  </StrictMode>,
);
