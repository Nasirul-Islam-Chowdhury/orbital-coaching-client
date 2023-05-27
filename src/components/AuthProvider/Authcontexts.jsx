import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../../../firebase.config'
import React, { createContext, useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
export const context = createContext();
const Authcontexts = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])
    const createUser = (email, password) =>  createUserWithEmailAndPassword(auth,email, password);
    const googleSignin = ()=> signInWithPopup(auth, googleProvider);
    const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);
    const emailSignin = (email, password)=> signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    const auhtInfo = { createUser,emailSignin, googleSignin, updateUserProfile,user,logOut,loading,setLoading};

    return (
        <div>
            <context.Provider value={auhtInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default Authcontexts;

