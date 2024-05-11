import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true);
    }


    //user login method with google popup
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }


    //user information in details method
    const userUpdateProfile = ( name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);


            if (currentUser) {
                axios.post('https://assignment12-server-ten.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token)
                        localStorage.setItem('jwt-access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('jwt-access-token')
            }




        })

        return () => {
            unsubscribe();
        }

    }, [])




    const authInformation = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;