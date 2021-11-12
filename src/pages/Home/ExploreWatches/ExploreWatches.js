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
         <h2>this is explore watches</h2>
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
         <Footer></Footer>
      </div>
   );
};

export default ExploreWatches;
