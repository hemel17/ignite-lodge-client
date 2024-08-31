import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return <Spinner className="w-4 h-4" />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
