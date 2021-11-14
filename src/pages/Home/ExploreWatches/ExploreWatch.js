import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ExploreWatch = props => {
   const { loading } = useAuth();

   if (loading) {
      return <Spinner className="m-5" animation="border" variant="warning" />;
   }

   const { watch } = props;
   const { _id, name, description, img, price } = watch;
   return (
      <div style={{ textAlign: 'center' }} className="d-flex p-3">
         <Card
            style={{
               border: '1px solid white',
               width: '18rem',
               backgroundColor: 'white',
               padding: '20px',
               borderRadius: '10px',
               boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
            }}
         >
            <Card.Img
               style={{ width: '70%', margin: 'auto' }}
               variant="top"
               src={img}
            />
            <Card.Body style={{ justifyContent: 'space-between' }}>
               <Card.Title className="tour-title p-2">
                  {name.slice(0, 20)}
               </Card.Title>
               <Card.Text>{description}</Card.Text>

               <h5 className="text-info p-2">
                  Price: <span className="price text-danger">{price}$</span>
               </h5>

               <Link to={`/exploreWatch/${_id}`}>
                  <Button variant="warning" className="px-5 my-3">
                     BUY NOW
                  </Button>
               </Link>
            </Card.Body>
         </Card>
      </div>
   );
};

export default ExploreWatch;
