import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Orders = () => {
   const { user, loading } = useAuth();
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/myOrder/${user?.email}`)
         .then(res => res.json())
         .then(data => setOrders(data));
   }, [user?.email]);

   if (loading) {
      return <Spinner className="m-5" animation="border" variant="warning" />;
   }

   return (
      <div style={{ textAlign: 'center' }}>
         <h2>MY ORDERS</h2>
         <div className="row m-0">
            {orders?.map(order => (
               <div
                  style={{
                     backgroundColor: 'white',
                     alignItems: 'center',
                     justifyContent: 'center',
                     borderRadius: '10px',
                  }}
                  className="col-lg-12 col-sm-12 py-2 my-2 d-flex"
                  key={order._id}
               >
                  <div className="px-5 col-lg-3 col-sm-12">
                     <img
                        style={{ width: '150px' }}
                        src={order?.image}
                        alt=""
                     />
                  </div>
                  <div className="col-lg-9 col-sm-12">
                     <h5>{order?.name}</h5>
                     <h4>Price: {order?.price}$</h4>
                     <h6>Number: {order?.number}</h6>
                     <h6>Comments: {order?.comments}</h6>
                     <h6>Date: {order?.date}</h6>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Orders;
