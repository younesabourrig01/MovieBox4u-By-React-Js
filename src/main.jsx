import { MoviesProvider } from "./Context/MoviesContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <MoviesProvider>
    <App />
  </MoviesProvider>
);
