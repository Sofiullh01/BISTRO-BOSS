import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./Routes/MainRoute.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
