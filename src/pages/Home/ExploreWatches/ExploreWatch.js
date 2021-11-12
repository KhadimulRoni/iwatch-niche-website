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
      <div className="d-flex p-3">
         <Card style={{ width: '20rem' }}>
            <Card.Img
               style={{ width: '100%', height: '250px' }}
               variant="top"
               src={img}
            />
            <Card.Body>
               <Card.Title className="tour-title p-2">{name}</Card.Title>
               <Card.Text>{description}</Card.Text>
               <div className="price-container d-flex p-2">
                  <h5 className="text-info">
                     Price: <span className="price text-danger">{price}</span>
                  </h5>
               </div>
               <Link to={`/exploreWatch/${_id}`}>
                  <Button variant="warning" className="px-5 my-3">
                     Book Now
                  </Button>
               </Link>
            </Card.Body>
         </Card>
      </div>
   );
};

export default ExploreWatch;
