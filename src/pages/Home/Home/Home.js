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

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <div
            style={{
               alignItems: 'center',
               justifyContent: 'center',
               color: 'white',
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
                           Build Quality and DesignBuild Quality and DesignBuild
                           Quality and DesignBuild Quality and DesignBuild
                           Quality and Design
                        </small>
                     </p>
                  </div>
                  <div className="p-2">
                     <img src={image3} alt="" />
                     <h5>Build Quality and Design</h5>
                     <p>
                        <small>
                           Build Quality and DesignBuild Quality and DesignBuild
                           Quality and DesignBuild Quality and DesignBuild
                           Quality and Design
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
                     <h5>Build Quality and Design</h5>
                     <p>
                        <small>
                           Build Quality and DesignBuild Quality and DesignBuild
                           Quality and DesignBuild Quality and DesignBuild
                           Quality and Design
                        </small>
                     </p>
                  </div>
                  <div className="p-2">
                     <img src={image5} alt="" />
                     <h5>Build Quality and Design</h5>
                     <p>
                        <small>
                           Build Quality and DesignBuild Quality and DesignBuild
                           Quality and DesignBuild Quality and DesignBuild
                           Quality and Design
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <DisplayWatches></DisplayWatches>
         <DisplayReview></DisplayReview>
         <Footer></Footer>
      </div>
   );
};

export default Home;
