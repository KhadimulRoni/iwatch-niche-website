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
   const [loading, setLoading] = useState(true);
   const [authError, setAuthError] = useState('');

   const auth = getAuth();

   const registerUser = (email, password) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
         })
         .catch(error => {
            setAuthError(error.message);
         })
         .finally(() => setLoading(false));
   };

   const loginUser = (email, password) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
         })
         .catch(error => {
            setAuthError(error.message);
         })
         .finally(() => setLoading(false));
   };

   // observer
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setLoading(false);
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
         })
         .finally(() => setLoading(false));
   };
   return {
      user,
      loading,
      authError,
      registerUser,
      loginUser,
      logOut,
   };
};

export default useFirebase;
