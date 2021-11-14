import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404.jpg';

const NotFound = () => {
   return (
      <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
         <img style={{ width: '45%' }} src={image} alt="" />
         <br />
         <Link to="/home">
            <button className="btn btn-danger mb-5">Back To Home</button>
         </Link>
      </div>
   );
};

export default NotFound;
