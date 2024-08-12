import axios from "axios";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const logOut = async () => {
  return await signOut(auth);
};

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          return Promise.reject({ status: error.response.status });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
