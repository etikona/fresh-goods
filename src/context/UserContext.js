import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState();

    //  Creating user with email and password
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    // User LogIn with Email and Password
    const userLogIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    // Log in with Google
    const GoogleLogin = (provider) => {

        return signInWithPopup(auth, provider);
    }

    //  Update user profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //  User LogOut Implement
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, createUser, userLogIn, logout, GoogleLogin, };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;