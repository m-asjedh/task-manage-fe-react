import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import UserRegister from "./components/UserRegister";
import UserDash from "./components/UserDash";
import AdminDash from "./components/AdminDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/admin_login",
        element: <AdminLogin />,
      },
      {
        path: "/register",
        element: <UserRegister />,
      },
      {
        path: "/user_dashboard",
        element: <UserDash />,
      },
      {
        path: "/admin_dashboard",
        element: <AdminDash />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
