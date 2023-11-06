import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../pages/ContactUs/Contact/Contact";
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
      { path: "/order", element: <Shop /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
