import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
         <div className="row m-0 ">
            {watches?.map(watch => (
               <div
                  style={{ alignItem: 'center', justifyContent: 'center' }}
                  className="col-lg-3 col-sm-12 d-flex"
                  key={watch._id}
               >
                  <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={watch?.img} />
                     <Card.Body>
                        <Card.Title>{watch?.name}</Card.Title>
                        <Card.Text>{watch?.description}</Card.Text>
                        <Card.Title>{watch?.price}$</Card.Title>
                        <Link to={`/placeOrder/${watch?._id}`}>
                           <Button variant="warning" className="px-5 my-3">
                              Book Now
                           </Button>
                        </Link>
                     </Card.Body>
                  </Card>
               </div>
            ))}
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ExploreWatches;
