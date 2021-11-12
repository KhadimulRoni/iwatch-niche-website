import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import initializeFirebase from './Firebase/firebase.init';

initializeFirebase();

const Registration = () => {
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
      console.log(password.length);
   };

   const handleRegister = e => {
      e.preventDefault();

      if (password?.length < 8) {
         setError('Password must be at least 8 character');
         return;
      } else {
         setPassword(e.target.value);
      }
      createUserWithEmailAndPassword(auth, email, password, user)
         .then(result => {
            const user = result.user;
            setEmail(email);
            setUser(user);
            setError('');
         })

         .catch(error => {
            setError(error.message);
         });
   };
   return (
      <div className="container pt-5 w-75">
         <div>
            <h2 className="text-primary p-3">Registration for new account</h2>
         </div>
         <Form className="mb-3">
            <Row>
               <Col>
                  <Form.Control placeholder="First name" />
               </Col>
               <Col>
                  <Form.Control placeholder="Last name" />
               </Col>
            </Row>
         </Form>

         <Form onSubmit={handleRegister}>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                     onChange={HandleEmailChange}
                     type="email"
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control
                     onChange={HandlePasswordChange}
                     type="password"
                     placeholder="Password"
                  />
               </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Control placeholder="Address 1" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
               <Form.Control placeholder="Address 2" />
            </Form.Group>

            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridCity">
                  <Form.Control placeholder="City" />
               </Form.Group>

               <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="State...">
                     <option>Choose...</option>
                     <option>...</option>
                  </Form.Select>
               </Form.Group>

               <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control placeholder="Zip Code" />
               </Form.Group>
            </Row>
            <p>
               Already have an account ? <Link to="/login">Login</Link>
            </p>
            <p className="text-danger">{error}</p>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
};

export default Registration;
