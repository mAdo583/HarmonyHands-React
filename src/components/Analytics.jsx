import React from 'react';
import Signs from '../assets/Signs.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>SIGN LANGUAGE LEARNING RESOURCES</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Enhance Your Sign Language Skills</h1>
          <p>
            Access a wealth of learning resources to improve your sign language skills. Our platform offers a variety of educational materials, including video tutorials, interactive lessons, and informative articles. Whether you're a beginner or advanced learner, discover comprehensive resources to support your sign language journey.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Explore Resources</button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Signs} alt='Learning Resources' />
      </div>
    </div>
  );
};

export default Analytics;