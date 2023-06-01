import Lottie from "lottie-react";
import animation from '../../../teacher.json'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' lg:h-[calc(100vh-5rem)] h-screen lg:flex justify-center items-center p-3'>

            <div className='container lg:flex md:flex justify-between items-center text-white'>
                <div className='lg:w-3/6  md:w-3/6 text-white h-full '>
                    <div className='flex justify-start lg:gap-10 md:gap-6 gap-3 font-primary uppercase text-sm font-extralight mb-4'>
                        <h1 className='px-3 font-primary rounded-md bg-white text-black  '>50% off</h1>
                        <p>Learn From Today</p>
                    </div>
                    <div className='flex flex-col gap-6 lg:text-6xl md:text-5xl text-2xl font-primary'>
                        <h1 className='max-w-[650px] leading-tight font-bold'>
                            Hire Best Tutors

                            Around Bangladesh For

                            Your Academic Success
                        </h1>
                    </div>

                    <div>
                        <p className='lg:mt-24 md:mt-20 mt-10 font-primary font-bold'>
                            Can’t handle tons of assignments?

                        </p>
                        <p className='mt-2 '>
                            We are here 24/7 and can help you make the most out of your study time!
                        </p>
                    </div>
                    <div className='mt-6 flex justify-start gap-3'>
                        <button className='btn '>
                            <Link to="/services">
                            Explore Services
                            </Link>
                        </button>
                        <button className='btn  btn-outline   text-white'>Learn More</button>
                    </div>
                </div>

                <div className='lg:w-3/6 md:w-3/6'>
                    <div className=' lg:w-full md:w-full md:h-full mx-auto lg:h-full w-5/6 h-1/2'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;