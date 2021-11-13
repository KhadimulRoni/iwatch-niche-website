import React from 'react';
import DisplayReview from '../../Dashboard/Review/DisplayReview';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <DisplayReview></DisplayReview>
         <Footer></Footer>
      </div>
   );
};

export default Home;
