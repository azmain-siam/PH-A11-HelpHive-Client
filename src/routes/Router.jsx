import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import PostDetails from "../pages/PostDetails";
import NeedVolunteer from "../pages/NeedVolunteer";
import ManagePost from "../pages/ManagePost";
import UpdatePost from "../pages/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/posts`),
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
        path: "/add",
        element: (
          <PrivateRoute>
            <AddVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/post/details/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/manage-post",
        element: (
          <PrivateRoute>
            <ManagePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/posts/update",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
