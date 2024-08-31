import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Error from "../../pages/Error/Error";
import Rooms from "../../pages/Rooms/Rooms";
import RoomDetails from "../../pages/Rooms/RoomDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "rooms/:_id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/room/${params._id}`),
      },
    ],
  },
]);

export default router;
