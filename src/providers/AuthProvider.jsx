import React, { Children, createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    }


    const userUpdateData =(user,  name, photo)=>{
        setLoading(true)
       return  updateProfile (user, {
         displayName: name,
         photoURL:photo
     })
     
 }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
          setUser(loggedInUser);
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);


    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        userUpdateData,
      

    }
   


    return (
        <AuthContext.Provider value={authInfo}>
    {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;