import React from 'react';
import pic1 from '../../images/it3.jpg';
import './Banner.css';

const Banner = () => {
    return (
      <div className="grid grid-cols-2">
        <div className="py-36 px-16">
          <h1 className="text-primary text-4xl font-semibold uppercase mb-5">
            Insaid It
          </h1>
          <p className="text-xl mb-5">
            Insaid it is a organized web reknowed it company which fullfill your
            every needs for it devices. We ensure the device quality and the
            best environment are provided for our customers.
          </p>
          <button class="btn btn-primary btn-wide font-semibold text-white">Get Started</button>
        </div>
        <div className="py-12">
          <img src={pic1} alt="" />
        </div>
      </div>
    );
};

export default Banner;