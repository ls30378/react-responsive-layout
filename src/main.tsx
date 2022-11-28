import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResponsiveBox } from "./components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResponsiveBox height={300} width={500} children={<App />} />
  </React.StrictMode>
);
