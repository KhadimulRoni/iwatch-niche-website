import React from 'react';
import DisplayReview from '../../Dashboard/Review/DisplayReview';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import DisplayWatches from '../DisplayWatches/DisplayWatches';
import image1 from '../../../images/5.png';
import image2 from '../../../images/4.jpg';
import image3 from '../../../images/3.jpg';
import image4 from '../../../images/2.jpg';
import image5 from '../../../images/1.jpg';
import icon1 from '../../../images/icon1.jpg';
import icon2 from '../../../images/icon3.jpg';
import icon3 from '../../../images/icon1.jpg';
import { Divider } from '@mui/material';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>

         <div
            style={{
               alignItems: 'center',
               justifyContent: 'center',

               padding: '6% 10%',
            }}
            className="row m-0  d-flex"
         >
            <div className="col-lg-6 col-sm-12 py-2">
               <img style={{ width: '90%' }} src={image1} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 py-2 ">
               <div
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  className="col-lg-12 col-sm-12 d-flex"
               >
                  <div className="p-2">
                     <img src={image2} alt="" />
                     <h5>Build Quality and Design</h5>
                     <p>
                        <small>
                           Design-build is a method of project delivery in which
                           one entity - the design-build team - works
                        </small>
                     </p>
                  </div>
                  <div className="p-2">
                     <img src={image3} alt="" />
                     <h5>Battery Life</h5>
                     <p>
                        <small>
                           The more you use AccuBattery, the better it gets at
                           analyzing your battery's performance.
                        </small>
                     </p>
                  </div>
               </div>
               <div
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  className="col-lg-12 col-sm-12 d-flex"
               >
                  <div className="p-2">
                     <img src={image4} alt="" />
                     <h5>Excellent battery life</h5>
                     <p>
                        <small>
                           Design-build is a method of project delivery in which
                           one entity - the design-build team - works
                        </small>
                     </p>
                  </div>
                  <div className="p-2">
                     <img src={image5} alt="" />
                     <h5>Accurate activity tracking</h5>
                     <p>
                        <small>
                           The more you use AccuBattery, the better it gets at
                           analyzing your battery's performance.
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <DisplayWatches></DisplayWatches>
         <div
            className="row m-0 d-flex p-5"
            style={{
               textAlign: 'center',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <div
               className="col-lg-4 col-sm-12 m-3"
               style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
               }}
            >
               <img style={{ width: '60px' }} src={icon1} alt="" />
               <h5>7 Days Return</h5>
               <p>
                  <small>We provide 7 days return for every watch...</small>
               </p>
            </div>
            <div
               className="col-lg-4 col-sm-12 m-3"
               style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
               }}
            >
               <img style={{ width: '60px' }} src={icon2} alt="" />
               <h5>100% Payment Secure</h5>
               <p>
                  <small>We provide 100% Payment Secure...</small>
               </p>
            </div>
            <div
               className="col-lg-4 col-sm-12 m-3"
               style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
               }}
            >
               <img style={{ width: '60px' }} src={icon3} alt="" />
               <h5>24/7 Support</h5>
               <p>
                  <small>We provide 24/7 Support...</small>
               </p>
            </div>
         </div>
         <DisplayReview></DisplayReview>
         <div
            style={{
               textAlign: 'center',
               background: '#5567EE',
            }}
            className="my-3 w-75 m-auto p-5 rounded"
         >
            <h2 className="tours p-3 ">- Subscribe Now -</h2>
            <input
               style={{ border: '1px solid white' }}
               className="w-50 py-2 rounded"
               type="email"
               name=""
               id=""
               placeholder="Your Email"
            />
            <br />
            <button className="btn btn-danger m-2">Subscribe</button>
         </div>
         <br />
         <Divider />
         <Footer></Footer>
      </div>
   );
};

export default Home;
