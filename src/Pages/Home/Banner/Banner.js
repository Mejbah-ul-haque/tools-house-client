import React from 'react';
import banner1 from '../../../assets/banner/banner1.webp';

const Banner = () => {
  return (
    // <div className="container mx-auto">
    //   <img src={banner1} />
    // </div>
    <div className="text-center">
      <div className="hero container mx-auto" style={{background:`url(${banner1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover'}}>
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mb-48">
            <h1 className="text-5xl font-bold text-red-500">Hello World</h1>
            <p className="my-5">This is HeadLines</p>
            <button className="btn rounded-full btn-accent my-5"> Get started</button>
            
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;