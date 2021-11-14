import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeFirebase from './Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import { CircularProgress, Alert } from '@mui/material';

initializeFirebase();

const Login = () => {
   const [loginData, setLoginData] = useState({});

   const { user, loginUser, signInWithGoogle, loading, authError } = useAuth();

   const location = useLocation();
   const history = useHistory();

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
   };

   const handleLogin = e => {
      loginUser(loginData?.email, loginData?.password, location, history);
      e.preventDefault();
   };

   const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
   };
   return (
      <div style={{ textAlign: 'center' }} className="container p-5 w-50">
         <div>
            <h2 className="text-primary p-3">Log in to your account</h2>
         </div>
         {!loading && (
            <Form onSubmit={handleLogin}>
               <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Control
                     onBlur={handleOnBlur}
                     type="email"
                     name="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Control
                     onBlur={handleOnBlur}
                     type="password"
                     name="password"
                     placeholder="Password"
                  />
               </Form.Group>

               <Button className="w-50" variant="primary" type="submit">
                  Login
               </Button>
               <p className="p-2">
                  Don't have an account ?{' '}
                  <Link to="/registration">Create an account</Link>
               </p>
            </Form>
         )}
         {loading && <CircularProgress />}
         {user?.email && <Alert severity="success">Login successful !</Alert>}
         {authError && <Alert severity="error">{authError}!</Alert>}

         <div>
            <h6 className="p-3">-------------</h6>
         </div>
         <button onClick={handleGoogleSignIn} className="btn btn-info">
            Google Sign In
         </button>
      </div>
   );
};

export default Login;
