import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";
import { Context } from "./globalData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);