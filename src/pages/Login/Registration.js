import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import initializeFirebase from './Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import { CircularProgress, Alert } from '@mui/material';

initializeFirebase();

const Registration = () => {
   const [registerData, setRegisterData] = useState({});

   const history = useHistory();
   const { user, registerUser, loading, authError } = useAuth();

   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newRegisterData = { ...registerData };
      newRegisterData[field] = value;
      setRegisterData(newRegisterData);
   };

   const handleRegister = e => {
      e.preventDefault();

      if (registerData?.password !== registerData?.password2) {
         alert('Your Password did not match');
         return;
      }
      registerUser(
         registerData?.email,
         registerData?.password,
         registerData?.name,
         history
      );
      e.preventDefault();
   };
   return (
      <div className="container pt-5 w-75">
         <div>
            <h2 className="text-primary p-3">Registration for new account</h2>
         </div>

         {!loading && (
            <Form onSubmit={handleRegister}>
               <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Control
                     onBlur={handleOnBlur}
                     type="text"
                     name="name"
                     placeholder="Enter Your Name"
                  />
               </Form.Group>
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
               <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Control
                     onBlur={handleOnBlur}
                     type="password"
                     name="password2"
                     placeholder="Re-Type-Password"
                  />
               </Form.Group>

               <Button className="w-50" variant="primary" type="submit">
                  Register Now
               </Button>
               <p className="p-2">
                  Already have an account ? <Link to="/login">Login</Link>
               </p>
            </Form>
         )}
         {loading && <CircularProgress />}
         {user?.email && (
            <Alert severity="success">Registration successful !</Alert>
         )}
         {authError && <Alert severity="error">{authError}!</Alert>}
      </div>
   );
};

export default Registration;
