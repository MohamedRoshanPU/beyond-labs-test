import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import NotFound from "../pages/not-found.tsx";
import Home from "../pages/home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <h1 className="text-2xl font-bold">About Page</h1>,
      },
      {
        path: "contact",
        element: <h1 className="text-2xl font-bold">Contact Page</h1>,
      },
    ],
  },
]);
