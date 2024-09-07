import ReactDOM from "react-dom/client";

import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "react-query";
import AllBooks from "./component/AllBooks/AllBooks";
import Details from "./component/Books/Details";
import Contact from "./component/Contact/Contact";
import DashBoard from "./DashBoard/DashBoard";
import UserHome from "./DashBoard/UserHome/UserHome";
import MyBooking from "./DashBoard/MyBooking/MyBooking";
import AddBooking from "./DashBoard/AddBooking/AddBooking";
import Update from "./DashBoard/Update/Update";
import PamentSyestem from "./DashBoard/PamentSyestem/PamentSyestem";
import LoginFrom from "./component/LoginFrom/LoginFrom";
import Registration from "./component/Registration/Registration";
import AuthProvider from "./component/Provider/AuthProvider";
import PrivateRoute from "./component/Provider/PrivateRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/details/:category",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-one-mauve.vercel.app/books/${params.category}`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LoginFrom></LoginFrom>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },

  // dashbord
  {
    path: "/dash",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mybook",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "addbook",
        element: <AddBooking></AddBooking>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,

        loader: ({ params }) =>
          fetch(`https://server-side-one-mauve.vercel.app/borrow/${params.id}`),
      },
      {
        path: "payment",
        element: <PamentSyestem></PamentSyestem>,
      },

      // // addmin related
      // {
      //   path: "allUsers",
      //   element: <AllUsers></AllUsers>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
