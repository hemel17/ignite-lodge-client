import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          try {
            // await logOut();
            // navigate("/login");
          } catch (err) {
            console.error("Error during logout:", err);
          }
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
