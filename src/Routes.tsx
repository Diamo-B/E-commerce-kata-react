import { Navigate, createBrowserRouter } from "react-router-dom";
import FullPageLayout from "./layouts/FullPageLayout";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <FullPageLayout />,
      children: [
        //? Route for the empty path ("/") to redirect to "/home"
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        }
      ],
    },
  ]);
  
  export default routes;