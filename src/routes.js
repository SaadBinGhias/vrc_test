import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: "/" }
);

export default router;
