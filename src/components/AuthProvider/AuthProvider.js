import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import { getUserData, insertUser } from "../../firebase/firestore";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [auth, setAuth] = useState({
    userData: null,
    uid: null,
    authenticated: false,
    loaded: false,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userData = (await getUserData(user.uid)).data();
        if (userData) {
          setAuth({
            userData: userData.todos,
            uid: user.uid,
            authenticated: true,
            loaded: true,
          });
        } else {
          insertUser(user);
          setAuth({
            userData: [],
            uid: user.uid,
            authenticated: true,
            loaded: true,
          });
        }
      } else {
        setAuth({
          userData: null,
          uid: null,
          authenticated: false,
          loaded: true,
        });
      }
    });
  }, []);

  useEffect(() => {
    if (auth.authenticated) {
      history.push("/app");
    }
  }, [auth.authenticated, history]);

  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  );
}
