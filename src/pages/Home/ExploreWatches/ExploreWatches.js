import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ExploreWatch from './ExploreWatch';

const ExploreWatches = () => {
   const [watches, setWatches] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/allWatches')
         .then(res => res.json())
         .then(data => setWatches(data));
   }, []);
   return (
      <div>
         <Header></Header>
         <div className="container p-3">
            <h2 style={{ textAlign: 'center' }}>EXPLORE WATCHES</h2>
            <h5 style={{ textAlign: 'center' }}>
               A watch is a portable timepiece intended to be carried or worn by
               a person
            </h5>
            <div className="row m-0 ">
               {watches?.map(watch => (
                  <div
                     style={{ alignItem: 'center', justifyContent: 'center' }}
                     className="col-lg-3 col-sm-12 d-flex"
                     key={watch._id}
                  >
                     <ExploreWatch watch={watch}></ExploreWatch>
                  </div>
               ))}
            </div>
         </div>
         <br />
         <Divider></Divider>
         <Footer></Footer>
      </div>
   );
};

export default ExploreWatches;
