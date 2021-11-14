import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const PlaceOrders = () => {
   const { user } = useAuth();
   const { id } = useParams();
   const [singleWatch, setSingleWatch] = useState({});

   const { register, handleSubmit, reset } = useForm();

   const onSubmit = data => {
      data.email = user.email;
      // console.log(data);

      axios
         .post('https://glacial-hamlet-57290.herokuapp.com/orders', data)
         .then(res => {
            if (res.data.insertedId) {
               alert('Order proceeded successfully');
               reset();
            }
         });
   };

   useEffect(() => {
      fetch(`https://glacial-hamlet-57290.herokuapp.com/singleWatch/${id}`)
         .then(res => res.json())
         .then(data => setSingleWatch(data));
   }, []);

   return (
      <div>
         <Header></Header>
         <div className="p-5 row m-0">
            <div style={{ textAlign: 'center' }} className="col-lg-6 col-sm-12">
               <img style={{ width: '50%' }} src={singleWatch?.img} alt="" />
               <h2 className="p-3 watch-title">{singleWatch?.name}</h2>
               <h6 className="p-2">{singleWatch?.description}</h6>
               <h3>
                  <span className="discount">Price: {singleWatch?.price}$</span>
               </h3>
            </div>
            <div className="col-lg-6 col-sm-12 add-watch">
               <h2 className=" p-3">- Order Info -</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                     {...register('name')}
                     defaultValue={singleWatch?.name}
                     required
                  />
                  <input
                     {...register('price')}
                     defaultValue={singleWatch?.price}
                     required
                  />

                  <input {...register('comments')} placeholder="Comments" />
                  <input
                     type="number"
                     {...register('number')}
                     placeholder="Number"
                     required
                  />
                  <input
                     type="img"
                     {...register('image')}
                     defaultValue={singleWatch?.img}
                     required
                  />
                  <input type="date" {...register('date')} required />
                  <button className="submit btn-warning px-5 py-1 my-3">
                     Place Order
                  </button>
               </form>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default PlaceOrders;
