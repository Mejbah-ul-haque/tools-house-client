import React from 'react';
import banner1 from '../../../assets/banner/banner1.webp';
import './Banner.css';

const Banner = () => {
  return (
    // <div className="container mx-auto">
    //   <img src={banner1} />
    // </div>
    <div className="text-center">
      <div className="hero container banner-photo mx-auto" style={{background:`url(${banner1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}>
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mb-48">
            <h1 className="text-4xl font-bold text-accent">Need any tools?</h1>
            <h1 className="text-5xl font-bold text-red-700">Call:  019170000</h1>
            <p className="my-5 text-primary">Your satisfaction our first priority </p>
            <button className="btn rounded-full btn-accent my-5 px-5 font-bold"> Buy Now</button>
            
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;