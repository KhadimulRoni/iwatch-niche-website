import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import pay1 from '../../../images/p1.png';
import pay2 from '../../../images/p2.png';
import pay3 from '../../../images/p3.png';
import pay4 from '../../../images/p4.png';
import pay5 from '../../../images/p5.png';

const Footer = () => {
   const { user, logOut } = useAuth();
   return (
      <div>
         <div style={{ textAlign: 'center' }}>
            <div className="py-3 mt-5">
               <div className="row m-0 ">
                  <div className="col-md-4  p-3 px-5">
                     <h3>iWaTcH</h3>
                     <p>
                        Trusted watch shop near you.WE always try to provide
                        best service to our customer.We provide 24/7 support for
                        customers..
                     </p>
                  </div>
                  <div className="col-md-4  p-3">
                     <Nav.Link as={Link} to="/home" className="text-dark">
                        Home
                     </Nav.Link>
                     <Nav.Link
                        as={Link}
                        to="/exploreWatches"
                        className="text-dark"
                     >
                        Explore
                     </Nav.Link>

                     {user.email && (
                        <Nav.Link
                           as={Link}
                           to="/dashboard"
                           className="text-dark"
                        >
                           Dashboard
                        </Nav.Link>
                     )}

                     <Nav.Link as={Link} to="/about" className="text-dark">
                        AboutUs
                     </Nav.Link>

                     {user?.email ? (
                        <Button onClick={logOut} className="m-2" variant="dark">
                           Logout
                        </Button>
                     ) : (
                        <Nav.Link
                           as={Link}
                           to="/login"
                           className="text-warning"
                        >
                           Login
                        </Nav.Link>
                     )}
                     <br />
                     <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                     </Navbar.Text>
                  </div>
                  <div className="col-md-4  p-3">
                     <h5 className="py-3 ">Newsletter</h5>
                     <input
                        style={{
                           border: '1px solid white',
                           backgroundColor: 'white',
                           boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
                        }}
                        className="w-75 py-2"
                        type="email"
                        name=""
                        id=""
                        placeholder="Your Email"
                     />
                     <button
                        style={{ border: '1px solid white' }}
                        className="py-2 btn-primary"
                     >
                        SUBSCRIBE
                     </button>
                     <div className=" py-2">
                        <img
                           style={{ cursor: 'pointer' }}
                           className="px-1"
                           src={pay1}
                           alt=""
                        />
                        <img
                           style={{ cursor: 'pointer' }}
                           className="px-1"
                           src={pay2}
                           alt=""
                        />
                        <img
                           style={{ cursor: 'pointer' }}
                           className="px-1"
                           src={pay3}
                           alt=""
                        />
                        <img
                           style={{ cursor: 'pointer' }}
                           className="px-1"
                           src={pay4}
                           alt=""
                        />
                        <img
                           style={{ cursor: 'pointer' }}
                           className="px-1"
                           src={pay5}
                           alt=""
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div
            className="py-2"
            style={{
               background: '#5567EE',
               textAlign: 'center',
               color: 'white',
            }}
         >
            <h6>Copyright © 2021 iWaTcH By KhadimulRoni</h6>
         </div>
      </div>
   );
};

export default Footer;
