import { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
   updateProfile,
   onAuthStateChanged,
} from 'firebase/auth';

// initializing firebase app
initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);
   const [authError, setAuthError] = useState('');

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const registerUser = (email, password, name, history) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            updateProfile(auth.currentUser, {
               displayName: name,
            })
               .then(() => {
                  // Profile updated!
                  // ...
               })
               .catch(error => {
                  // An error occurred
                  // ...
               });
            history.replace('/');
         })
         .catch(error => {
            setAuthError(error.message);
         })
         .finally(() => setLoading(false));
   };

   const loginUser = (email, password, location, history) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
         })
         .catch(error => {
            setAuthError(error.message);
         })
         .finally(() => setLoading(false));
   };

   const signInWithGoogle = (location, history) => {
      setLoading(true);
      signInWithPopup(auth, googleProvider)
         .then(result => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            const user = result.user;
            setAuthError('');
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
      signInWithGoogle,
      logOut,
   };
};

export default useFirebase;
