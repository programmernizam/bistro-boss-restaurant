import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import NotFound from "../pages/Shared/NotFound";
import Shop from "../pages/Shop/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-menu", element: <OurMenu /> },
      { path: "/shop", element: <Shop /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
