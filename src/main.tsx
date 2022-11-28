import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ResponsiveBox } from "./components";
import { ResponsiveBox } from "@ls30378/react-responsive-layout";
// @ts-ignore
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ResponsiveBox boxClass="what" height={300} width={500}>
      <App />
    </ResponsiveBox>
  </React.StrictMode>
);
