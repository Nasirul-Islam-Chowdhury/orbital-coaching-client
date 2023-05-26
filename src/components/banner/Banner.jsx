import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../teacher.json'

const Banner = () => {
    return (
        <div className=' lg:h-[calc(100vh-5rem)] h-full flex justify-center items-center '>

        <div className='container flex justify-between items-center text-white'>
            <div className='w-3/5 font-primary text-white'>
                <div className='flex justify-start gap-10  uppercase text-sm font-extralight mb-4'>
                    <h1 className='px-3 rounded-md bg-white text-black font-third'>50% off</h1>
                    <p>Learn From Today</p>
                </div>
                <div className='flex flex-col gap-6 text-6xl'>
                    <h1>
                        Hire Best Tutors
                    </h1>
                    <h1>
                        Around Bangladesh For
                    </h1>
                    <h1>
                        Your Academic Success
                    </h1>
                </div>
              
                <div>
                    <p className='mt-24 font-bold'>
                        Can’t handle tons of assignments?
                        
                    </p>
                    <p className='mt-2'>
                   We are here 24/7 and can help you make the most out of your study time!
                    </p>
                </div>
                <div className='mt-6'>
                    <button className='btn  mr-5'>Explore Services</button>
                    <button className='btn  btn-outline   text-white'>Learn More</button>
                </div>
            </div>

            <div className='w-2/5'>
                <div className=' w-full h-full'>
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        </div>

    </div>
    );
};

export default Banner;