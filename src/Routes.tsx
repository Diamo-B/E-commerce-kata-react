import { createBrowserRouter } from "react-router-dom";
import FullPageLayout from "./layouts/FullPageLayout";
import Home from "./components/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <FullPageLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        }
      ],
    },
  ]);
  
  export default routes;