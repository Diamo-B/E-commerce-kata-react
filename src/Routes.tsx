import { Navigate, createBrowserRouter } from "react-router-dom";
import FullPageLayout from "./layouts/FullPageLayout";
import Home from "./components/Home";

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
        }
      ],
    },
  ]);
  
  export default routes;