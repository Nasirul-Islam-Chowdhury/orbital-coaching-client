import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../teacher.json'
const Home = () => {
    return (
      <div className='flex justify-between container'>
        <div>
<h1 className='text-4xl'>
    Learn On your schedule
</h1>
        </div>
        <div>
        <div className='w-full h-1/2'>
          <Lottie animationData={animation} loop={true} />
        </div>
        </div>
      </div>
    );
};

export default Home;