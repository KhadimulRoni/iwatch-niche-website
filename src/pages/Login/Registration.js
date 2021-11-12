import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import initializeFirebase from './Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeFirebase();

const Registration = () => {
   const [registerData, setRegisterData] = useState({});

   const [error, setError] = useState('');

   const { registerUser, loading,authError } = useAuth();

   const handleOnChange = e => {
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
      registerUser(registerData?.email, registerData?.password);
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
                     onChange={handleOnChange}
                     type="name"
                     name="name"
                     placeholder="Enter Your Name"
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Control
                     onChange={handleOnChange}
                     type="email"
                     name="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Control
                     onChange={handleOnChange}
                     type="password"
                     name="password"
                     placeholder="Password"
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Control
                     onChange={handleOnChange}
                     type="password"
                     name="password2"
                     placeholder="Re-Type-Password"
                  />
               </Form.Group>

               <p>
                  Already have an account ? <Link to="/login">Login</Link>
               </p>
               <p className="text-danger">{error}</p>
               <Button variant="primary" type="submit">
                  Submit
               </Button>
            </Form>
         )}
         {loading && }
         {}
      </div>
   );
};

export default Registration;
