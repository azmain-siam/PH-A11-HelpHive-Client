import auth from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  // Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // Logout
  const logout = async () => {
    setUser(null);
    const { data } = await axios(`http://localhost:5000/logout`, {
      withCredentials: true,
    });
    console.log(data);
    return signOut(auth);
  };

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);

  // Pass the infos
  const authInfo = {
    createUser,
    user,
    setUser,
    signinUser,
    logout,
    setLoading,
    loading,
    updateUser,
    setReload,
    reload,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.array,
};
