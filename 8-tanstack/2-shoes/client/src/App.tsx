import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Home from "./page/home";
import Layout from "./components/layout";

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
        element: <Home />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
