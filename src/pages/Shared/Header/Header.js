import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   const { user, logOut } = useAuth();

   return (
      <>
         <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            collapseOnSelect
            expand="lg"
         >
            <Container>
               {/* <Navbar.Brand href="#home"><img style={{width:"70%"}} src="" alt="" /></Navbar.Brand> */}
               <Navbar.Brand href="#home">
                  <h2>iWaTch</h2>
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={Link} to="/home" className="text-light">
                     Home
                  </Nav.Link>
                  <Nav.Link
                     as={Link}
                     to="/exploreWatches"
                     className="text-light"
                  >
                     ExploreWatches
                  </Nav.Link>
                  {/* {user.email && (
                     <Nav.Link as={Link} to="/addWatch" className="text-light">
                        AddWatch
                     </Nav.Link>
                  )} */}
                  {user.email && (
                     <Nav.Link as={Link} to="/dashboard" className="text-light">
                        Dashboard
                     </Nav.Link>
                  )}
                  {/* {user.email && (
                     <Nav.Link as={Link} to="/orders" className="text-light">
                        Orders
                     </Nav.Link>
                  )}
                  {user.email && (
                     <Nav.Link
                        as={Link}
                        to="/manageOrders"
                        className="text-light"
                     >
                        ManageOrders
                     </Nav.Link>
                  )} */}
                  <Nav.Link as={Link} to="/about" className="text-light">
                     AboutUs
                  </Nav.Link>

                  {user?.email ? (
                     <Button onClick={logOut} className="m-2" variant="light">
                        Logout
                     </Button>
                  ) : (
                     <Nav.Link as={Link} to="/login" className="text-warning">
                        Login
                     </Nav.Link>
                  )}

                  <Navbar.Text>
                     Signed in as: <a href="#login">{user?.displayName}</a>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
