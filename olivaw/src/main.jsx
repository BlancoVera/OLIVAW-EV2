import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // 1. Primero carga Bootstrap (Estructura)
import "./index.css";                          // 2. Luego carga OLIVAW (Identidad visual)
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);