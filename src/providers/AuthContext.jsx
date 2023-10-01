import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../fire-base/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [userC, setUserC] = useState();
    const auth = getAuth(app);

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateState = (val) =>{
        setUserC(val)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    
    useEffect(() =>{
    const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
        setUserC(currentUser);
      });

      return () => unsubscribe();
    },[])
    
    const authInfo = {createUser, updateState, userC , signIn , logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;