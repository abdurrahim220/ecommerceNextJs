import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/UserPage/LoginPage/Login";
import Register from "../components/UserPage/RegisterPage/Register";
import Loader from "../components/Loader/Loader";
import React, { Suspense } from "react";
import Summary from "../dashboard/admin/Summary/Summary";

const DashboardHome = React.lazy(() =>
  import("../dashboard/Layout/DashboardHome")
);

const Main = React.lazy(() => import("../Layout/Main"));
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/checkout-success",
        element: <Category />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardHome />
      </Suspense>
    ),
    children: [
      {
        path: "/dashboard/summary",
        element: <Summary />,
      },
    ],
  },
]);

export default router;
