
import React from 'react';
import Typed from 'react-typed';
import './HeroStyles.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-hero hero-container mx-auto text-center'>
        <p className='hero-title'>
          BRIDGING COMMUNICATION THROUGH SIGN LANGUAGE
        </p>
        <h1 className='hero-heading'>
          Connect with Sign Language.
        </h1>
        <div className='hero-subheading'>
          <p className='hero-subheading'>
            Transformative Sign Language Services:
          </p>
          <Typed
            className='typed-text'
            strings={['Interpretation', 'Education', 'Tutoring']}
            typeSpeed={150}
            backSpeed={140}
            loop
          />
        </div>
        <p className='hero-description'>
          Enhance your sign language experience for better communication.
        </p>
        <button className='hero-button'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
