import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Catagories from "../pages/Home/Catagories";
import News from "../pages/Home/Home/News";
import NewsLayOut from "../pages/Home/Home/NewsLayOut";
import Login from "../pages/Shared/LoginLayOut/Login";
import LoginLayout from "../pages/Shared/LoginLayOut/LoginLayout";
import Registewr from "../pages/Shared/LoginLayOut/Registewr";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registewr></Registewr>,
      },
    ],
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Catagories></Catagories>,
        loader: ({ params }) => fetch(`http://localhost:3000/catagories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayOut></NewsLayOut>,
    children: [
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
