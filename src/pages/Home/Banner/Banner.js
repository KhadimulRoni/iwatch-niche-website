import React from 'react';
import banner1 from '../../../images/banner11.jpg';

const Banner = () => {
   return (
      <div>
         <div style={{ backgroundColor: '#F9F9F9' }} className="row m-0">
            <div
               style={{ alignItems: 'center', justifyContent: 'center' }}
               className="col d-flex"
            >
               <div className="col-lg-7  col-sm-7">
                  <img style={{ width: '90%' }} src={banner1} alt="" />
               </div>
               <div className="col-lg-5  col-sm-5">
                  <p style={{ fontSize: '20px' }}>Here To Make Hand Turn</p>
                  <h1 className="py-2">The Future of Tech Is Here</h1>
                  <button
                     style={{ border: '1px solid white' }}
                     className="py-2 btn-primary"
                  >
                     SHOP NOW
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
