import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ExploreWatches = () => {
   const [watches, setWatches] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/exploreWatches')
         .then(res => res.json())
         .then(data => setWatches(data));
   }, []);
   return (
      <div>
         <Header></Header>
         <h2>this is explore watches</h2>
         <div>
            {watches?.map(watch => (
               <div key={watch._id}>
                  <img src={watch?.img} alt="" />
                  <h2>{watch?.name}</h2>
                  <h6>{watch?.description}</h6>
               </div>
            ))}
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ExploreWatches;
