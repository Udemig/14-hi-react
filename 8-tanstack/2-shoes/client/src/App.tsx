import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Home from "./page/home";
import Layout from "./components/layout";
import Dashboard from "./page/dashboard";
import Protected from "./components/protected";
import Detail from "./page/detail";
import Create from "./page/create";
import Edit from "./page/edit";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/shoe/:id",
        element: (
          <Protected>
            <Detail />
          </Protected>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/admin/create",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Create />
          </Protected>
        ),
      },
      {
        path: "/admin/edit/:id",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Edit />
          </Protected>
        ),
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
