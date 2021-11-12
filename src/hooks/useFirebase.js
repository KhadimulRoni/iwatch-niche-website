import { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from 'firebase/auth';

// initializing firebase app
initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState({});

   const auth = getAuth();

   const registerUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
         })
         .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
         });
   };

   const loginUser = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
         })
         .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
   };

   // observer
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
      });
      return () => unsubscribed;
   }, []);

   const logOut = () => {
      signOut(auth)
         .then(() => {
            // Sign-out successful.
         })
         .catch(error => {
            // An error happened.
         });
   };
   return {
      user,
      registerUser,
      loginUser,
      logOut,
   };
};

export default useFirebase;
