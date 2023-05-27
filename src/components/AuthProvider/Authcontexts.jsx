import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase.config'
import React, { createContext } from 'react';
export const context = createContext()
const Authcontexts = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const unSubscribe =()=>{
        
    } 
    const createUser = (email, password) =>  createUserWithEmailAndPassword(auth,email, password)
    const googleSignin = ()=> signInWithPopup(auth, googleProvider)
    const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile)
    const emailSignin = (email, password)=> signInWithEmailAndPassword(auth, email, password)
    const auhtInfo = { createUser,emailSignin, googleSignin, updateUserProfile};
    return (
        <div>
            <context.Provider value={auhtInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default Authcontexts;

