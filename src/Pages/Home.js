import React from 'react';
import Hero from '../components/Hero'; 
import Analytics from '../components/Analytics';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';

const Home = () => {
 return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
 );
}

export default Home;