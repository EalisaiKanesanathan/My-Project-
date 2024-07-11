
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
 
export const AuthContext = createContext();
const auth = getAuth(app);
 
export const AuthProvider = ({children}) => {
 
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
 
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
 
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
 
    const logOut = () => {
        return signOut(auth)
    }
 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                // Check if the user's email matches the admin email
                setIsAdmin(currentUser.email === 'admin@gmail.com'); // Update with admin email
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])
 
    const authInfo = {
        user,
        isAdmin, // Include isAdmin in the authInfo
        createUser,
        loginWithGoogle,
        login,
        logOut
    }
 
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
 
export default AuthProvider;
 