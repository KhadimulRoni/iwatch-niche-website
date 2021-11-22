import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
   const [orders, setOrders] = useState([]);
   const { register, handleSubmit } = useForm();

   const [status, setStatus] = useState('');
   const [orderId, setOrderId] = useState('');

   console.log(status);
   useEffect(() => {
      fetch('https://glacial-hamlet-57290.herokuapp.com/orders')
         .then(res => res.json())
         .then(data => setOrders(data));
   }, []);

   const handleOrderId = id => {
      setOrderId(id);
   };

   const onSubmit = data => {
      fetch(
         `https://glacial-hamlet-57290.herokuapp.com/statusUpdate/${orderId}`,
         {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
         }
      )
         .then(res => res.json())
         .then(result => console.log(result));
   };

   const handleDelete = id => {
      fetch(`https://glacial-hamlet-57290.herokuapp.com/deleteOrder/${id}`, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
      })
         .then(res => res.json())
         .then(data => console.log(data));

      alert('Order deleted successfully');
      window.location.reload();
   };

   return (
      <div
         style={{ textAlign: 'center', width: '100%', height: '100vh' }}
         className="container"
      >
         <h2 style={{ textAlign: 'center', padding: '10px 0' }}>
            All orders : {orders.length}
         </h2>

         <Table style={{ backgroundColor: 'white' }} striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Image </th>
                  <th>Service Title</th>
                  <th>Delivery Date</th>

                  <th>Status & Action</th>
               </tr>
            </thead>
            {orders?.map((pd, index) => (
               <tbody>
                  <tr>
                     <td>{index}</td>
                     <td>
                        <img style={{ width: '30px' }} src={pd.image} alt="" />
                     </td>
                     <td>{pd.name}</td>
                     <td>{pd.date}</td>

                     <td>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input
                              type="text"
                              defaultValue={pd?.status}
                              onClick={() => handleOrderId(pd?._id)}
                              {...register('status')}
                           ></input>
                           <input
                              className="btn bg-success p-2 m-1"
                              type="submit"
                           ></input>
                           <button
                              onClick={() => handleDelete(pd?._id)}
                              className="btn bg-danger p-2 m-1"
                           >
                              Delete
                           </button>
                        </form>
                     </td>
                  </tr>
               </tbody>
            ))}
         </Table>
      </div>
   );
};

export default ManageOrders;
