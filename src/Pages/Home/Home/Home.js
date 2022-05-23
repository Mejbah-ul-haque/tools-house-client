import React from 'react';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Tools from '../Tools/Tools';

const Home = () => {
  return (
    <div className="container mx-auto my-24">
      <Banner></Banner>
      <Business></Business>
      <Tools></Tools>
    </div>
  );
};

export default Home;