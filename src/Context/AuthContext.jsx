import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [loader, setLoader] = useState(false)

    // create user
    const createUser = (email, password) => {
        setLoader(true)
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email and password
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign Out
    const LogOut = () => {
        return signOut(auth);
    }

    // user information update
    // const updateUser = (userInfo) => {
    //     return updateProfile(user.uid && user, userInfo)
    // }



    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    };

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            setLoader(false)

        });
        return () => unsubscribe()
    }, [user])



    const authInfo = {
        createUser,
        loginWithEmailAndPassword,
        user,
        LogOut,
        updateUser,
        loading,
        loader,
        setLoader


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;