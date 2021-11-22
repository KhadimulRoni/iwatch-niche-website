import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
   const { register, handleSubmit, reset } = useForm();
   const { user } = useAuth();

   const onSubmit = data => {
      // console.log(data);

      axios
         .post('https://glacial-hamlet-57290.herokuapp.com/addReview', data)
         .then(res => {
            if (res.data.insertedId) {
               alert('watch added successfully');
               reset();
            }
         });
   };

   return (
      <div style={{ textAlign: 'center', width: '100%', height: '100vh' }}>
         <h2 className="text-white mb-3">Review</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               className="my-2 w-50"
               {...register('name', { required: true })}
               defaultValue={user?.name}
               name="name"
               type="text"
               placeholder="name"
               required
            />
            <br />
            <input
               className="my-2 w-50"
               {...register('email', { required: true })}
               value={user?.email}
               name="email"
               type="email"
               required
            />

            <br />
            <textarea
               className="mb-2 w-50"
               {...register('comments', { required: true })}
               placeholder="Comments"
               name="comments"
               required
            />
            <br />
            <input className="btn-warning w-25 py-1 submit" type="submit" />
         </form>
      </div>
   );
};

export default Review;
