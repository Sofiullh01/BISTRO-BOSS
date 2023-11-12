import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            index:  true,
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>,
        }
      ]
    },
  ]);

  export default router;