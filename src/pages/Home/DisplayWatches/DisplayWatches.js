import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisplayWatches = () => {
   const [watches, setWatches] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/displayWatches')
         .then(res => res.json())
         .then(data => setWatches(data));
   }, []);
   return (
      <div className="container" style={{ textAlign: 'center' }}>
         <h2>WATCH COLLECTION</h2>
         <h5>
            A watch is a portable timepiece intended to be carried or worn by a
            person
         </h5>
         <div className="row m-0  ">
            {watches?.map(watch => (
               <div
                  style={{ alignItem: 'center', justifyContent: 'center' }}
                  className="col-lg-4 col-sm-12 p-3 d-flex"
                  key={watch._id}
               >
                  <Card
                     style={{
                        border: '1px solid white',
                        width: '20rem',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
                     }}
                  >
                     <Card.Img
                        style={{ width: '70%', margin: 'auto' }}
                        variant="top"
                        src={watch?.img}
                     />
                     <Card.Body style={{ justifyContent: 'space-between' }}>
                        <Card.Title className="tour-title p-2">
                           {watch?.name.slice(0, 20)}
                        </Card.Title>
                        <Card.Text>{watch?.description}</Card.Text>

                        <h5 className="text-info p-2">
                           Price:{' '}
                           <span className="price text-danger">
                              {watch?.price}$
                           </span>
                        </h5>

                        <Link to={`/exploreWatch/${watch?._id}`}>
                           <Button variant="warning" className="px-5 my-3">
                              BUY NOW
                           </Button>
                        </Link>
                     </Card.Body>
                  </Card>
               </div>
            ))}
         </div>
      </div>
   );
};

export default DisplayWatches;
