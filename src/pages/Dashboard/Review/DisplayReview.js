import React, { useEffect, useState } from 'react';

const DisplayReview = () => {
   const [reviews, setReviews] = useState([]);
   //    console.log(review);

   useEffect(() => {
      fetch('http://localhost:5000/reviews')
         .then(res => res.json())
         .then(data => setReviews(data));
   }, []);
   return (
      <div>
         <h2>Users Review</h2>
         <div className="row m-0">
            {reviews?.map(review => (
               <div
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  className="col  d-flex"
                  key={review?._id}
               >
                  <div className="col-lg-3 col-sm-12 ">
                     <h5 className="text-danger">{review?.comments}</h5>
                     <h6 className="text-warning">
                        <small>{review?.email}</small>
                     </h6>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default DisplayReview;
