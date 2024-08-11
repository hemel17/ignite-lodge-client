import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const createUser = async ({ name, email, password }) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      setUser({ ...auth.currentUser, name });
    }
    return user;
  };

  const logIn = async ({ email, password }) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    setLoading(true);
    return await signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axiosSecure
          .post("/jwt", loggedUser)
          .then((res) => console.log(res.data));
      } else {
        axiosSecure
          .post("/logout", loggedUser)
          .then((res) => console.log(res.data));
      }
    });
    return () => unSubscribe();
  }, [axiosSecure, user?.email]);

  const userInfo = { user, loading, createUser, logIn, googleLogIn, logOut };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
