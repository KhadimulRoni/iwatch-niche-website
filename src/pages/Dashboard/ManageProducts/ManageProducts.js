import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
   const [watches, setWatches] = useState([]);

   useEffect(() => {
      fetch('https://glacial-hamlet-57290.herokuapp.com/allWatches')
         .then(res => res.json())
         .then(data => setWatches(data));
   }, []);

   const handleDelete = id => {
      fetch(`https://glacial-hamlet-57290.herokuapp.com/deleteProduct/${id}`, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
      })
         .then(res => res.json())
         .then(data => console.log(data));

      alert('Order deleted successfully');
      window.location.reload();
   };
   return (
      <div style={{ textAlign: 'center', width: '100%' }}>
         <h2 className="p-4">- Manage Product -</h2>

         <Table style={{ backgroundColor: 'white' }} striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Image </th>
                  <th>Service Title</th>
                  <th>Price</th>

                  <th>Action</th>
               </tr>
            </thead>
            {watches?.map((pd, index) => (
               <tbody>
                  <tr>
                     <td>{index}</td>
                     <td>
                        <img style={{ width: '30px' }} src={pd?.img} alt="" />
                     </td>
                     <td>{pd?.name}</td>
                     <td>{pd?.price}</td>

                     <button
                        onClick={() => handleDelete(pd?._id)}
                        className="btn btn-danger"
                     >
                        DELETE
                     </button>
                  </tr>
               </tbody>
            ))}
         </Table>
      </div>
   );
};

export default ManageProducts;
