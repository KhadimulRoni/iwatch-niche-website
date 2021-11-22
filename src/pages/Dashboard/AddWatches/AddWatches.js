import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddWatches.css';

const AddWatches = () => {
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = data => {
      // console.log(data);

      axios
         .post('https://glacial-hamlet-57290.herokuapp.com/addWatches', data)
         .then(res => {
            if (res.data.insertedId) {
               alert('watch added successfully');
               reset();
            }
         });
      console.log(data);
   };

   return (
      <div
         style={{ textAlign: 'center', width: '100%', height: '100vh' }}
         className="add-watch"
      >
         <h2 className=" p-3">- Add watch -</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="Name" required />
            <textarea
               {...register('description')}
               placeholder="Description"
               required
            />
            <input
               type="number"
               {...register('price')}
               placeholder="Price"
               required
            />
            <input {...register('img')} placeholder="Image url" required />
            <input className="btn-warning py-1 submit" type="submit" />
         </form>
      </div>
   );
};

export default AddWatches;
