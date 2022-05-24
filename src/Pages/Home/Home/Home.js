import React from 'react';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import NewArrivals from '../NewArrivals/NewArrivals';
import SpecialSections from '../SpecialSections/SpecialSections';
import Reviews from '../Reviews/Reviews';

import Tools from '../Tools/Tools';

const Home = () => {
  return (
    <div className="container mx-auto my-24">
      <Banner></Banner>
      <Business></Business>
      <Tools></Tools>
      <Reviews></Reviews>
      <SpecialSections></SpecialSections>
      <NewArrivals></NewArrivals>
    </div>
  );
};

export default Home;