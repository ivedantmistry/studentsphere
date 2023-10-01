import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./router/MainRouter.jsx";
import AuthProvider from "./providers/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
