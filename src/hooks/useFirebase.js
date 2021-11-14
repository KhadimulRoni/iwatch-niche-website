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
import axios from 'axios';

// initializing firebase app
initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);
   const [authError, setAuthError] = useState('');
   const [admin, setAdmin] = useState(false);

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const registerUser = (email, password, name, history) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user in database
            saveUser(email, name);
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
            const destination = location?.state?.from || '/dashboard';
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
            const destination = '/dashboard';
            history.replace(destination);
            const user = result.user;
            saveGoogleUser(user?.email, user?.displayName);
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

   useEffect(() => {
      fetch(`https://glacial-hamlet-57290.herokuapp.com/users/${user?.email}`)
         .then(res => res.json())
         .then(data => setAdmin(data.admin));
   }, [user?.email]);

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

   const saveUser = (email, displayName) => {
      const user = { email, displayName };
      axios
         .post('https://glacial-hamlet-57290.herokuapp.com/users', user)
         .then(res => {});
   };
   const saveGoogleUser = (email, displayName) => {
      const user = { email, displayName };
      axios
         .put('https://glacial-hamlet-57290.herokuapp.com/users', user)
         .then(res => {});
   };
   return {
      user,
      admin,
      loading,
      authError,
      registerUser,
      loginUser,
      signInWithGoogle,
      logOut,
   };
};

export default useFirebase;
