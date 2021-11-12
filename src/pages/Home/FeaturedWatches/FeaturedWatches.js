import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const FeaturedWatches = () => {
   const [fWatches, setFWatches] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/featuredWatches')
         .then(res => res.json())
         .then(data => setFWatches(data));
   }, []);
   return (
      <div>
         <h2>this is Featured watches</h2>
         <div className="row m-0 ">
            {fWatches?.map(watch => (
               <div
                  style={{ alignItem: 'center', justifyContent: 'center' }}
                  className="col-lg-4 col-sm-12 d-flex p-3"
                  key={watch._id}
               >
                  <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={watch?.img} />
                     <Card.Body>
                        <Card.Title>{watch?.name}</Card.Title>
                        <li>
                           <ul>
                              <Card.Text>{watch?.description}</Card.Text>
                           </ul>
                        </li>
                        <Card.Title>{watch?.price}$</Card.Title>
                        <Button variant="primary">Buy Now</Button>
                     </Card.Body>
                  </Card>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FeaturedWatches;
