import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedWatches from '../FeaturedWatches/FeaturedWatches';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Banner></Banner>
         <FeaturedWatches></FeaturedWatches>
         <Footer></Footer>
      </div>
   );
};

export default Home;
