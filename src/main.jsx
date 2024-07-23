import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Crops from "./pages/Crops"
import CropTypes from "./pages/CropTypes"





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
     
      {
        path: "/crops",
        element: <Crops />
      },
      {
        path: "/croptypes",
        element: <CropTypes />
      },
     
     
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
