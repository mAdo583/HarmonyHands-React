import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single User" />
          <h2 className='text-2xl font-bold text-center py-8'>Sign Language Translation</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Professional Translation</p>
            <p className='py-2 border-b mx-8'>Certified Translators</p>
            <p className='py-2 border-b mx-8'>Accurate and Fast</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Translation</button>
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="Double User" />
          <h2 className='text-2xl font-bold text-center py-8'>Sign Language Tutoring</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Experienced Tutors</p>
            <p className='py-2 border-b mx-8'>Interactive Learning</p>
            <p className='py-2 border-b mx-8'>Personalized Sessions</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Tutoring</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="Triple User" />
          <h2 className='text-2xl font-bold text-center py-8'>Important Signs to Learn</h2>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Common Everyday Signs</p>
            <p className='py-2 border-b mx-8'>Cultural and Custom Signs</p>
            <p className='py-2 border-b mx-8'>Interactive Learning Material</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Explore Signs</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
