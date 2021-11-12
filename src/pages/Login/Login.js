import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import initializeFirebase from './Firebase/firebase.init';

initializeFirebase();

const Login = () => {
   const { signInUsingGoogle } = useAuth();

   /* -------Login Handler------ */
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [user, setUser] = useState({});
   const [error, setError] = useState('');

   const auth = getAuth();

   const HandleEmailChange = e => {
      setEmail(e.target.value);
   };
   const HandlePasswordChange = e => {
      const password = e.target.value;
      setPassword(password);
   };

   const handleLogin = e => {
      e.preventDefault();

      if (password?.length < 8) {
         setError('Password must be at least 8 character');
         return;
      } else {
         setPassword(e.target.value);
      }
      createUserWithEmailAndPassword(auth, email, password, user)
         .then(result => {
            const user = result?.user;
            setEmail(email);
            setUser(user);
            setError('');
         })
         .catch(error => {
            setError(error.message);
         });
   };
   return (
      <div className="container p-5 w-50">
         <div>
            <h2 className="text-primary p-3">Log in to your account</h2>
         </div>
         <Form onSubmit={handleLogin}>
            <Form.Group
               as={Row}
               className="mb-3"
               controlId="formHorizontalEmail"
            >
               <Form.Label column sm={2}>
                  Email
               </Form.Label>
               <Col sm={10}>
                  <Form.Control
                     onChange={HandleEmailChange}
                     type="email"
                     placeholder="Email"
                  />
               </Col>
            </Form.Group>

            <Form.Group
               as={Row}
               className="mb-3"
               controlId="formHorizontalPassword"
            >
               <Form.Label column sm={2}>
                  Password
               </Form.Label>
               <Col sm={10}>
                  <Form.Control
                     onChange={HandlePasswordChange}
                     type="password"
                     placeholder="Password"
                  />
               </Col>
            </Form.Group>

            <p>
               Don't have an account ?{' '}
               <Link to="/registration">Create an Account</Link>
            </p>
            <p className="text-danger p-3">{error}</p>
            <Form.Group as={Row} className="mb-3">
               <Col sm={{}}>
                  <Button className="btn btn-primary" type="submit">
                     Log in
                  </Button>
               </Col>
            </Form.Group>
         </Form>

         <div>
            <h6 className="p-3">--- or ---</h6>
         </div>
         <button onClick={signInUsingGoogle} className="btn btn-info">
            Google Sign In
         </button>
      </div>
   );
};

export default Login;
