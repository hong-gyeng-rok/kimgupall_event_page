import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ImageDataProvider } from "./context/ImageDataContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageDataProvider>
      <App />
    </ImageDataProvider>
  </StrictMode>,
);
