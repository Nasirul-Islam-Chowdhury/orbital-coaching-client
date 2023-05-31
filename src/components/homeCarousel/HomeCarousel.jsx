import React from 'react';

const HomeCarousel = () => {
    return (
        <div className=' bg-white py-40'>
            <div className='container lg:w-3/5 w-4/5 '>
            <div className='lg:flex justify-between items-center'>
                    <div className='text-center'>
                        <h1 className='text-5xl'>Manage Homework</h1>
                        <p className='mt-4'>All subjects, files, and materials in one place</p>
                    </div>
                    <div>
                        <img className='w-full mt-4' src="https://asset.mysupergeek.com/bundles/asterfreelance/_layout/images/MySuperGeekCom/benefits/1.svg?1658143617" alt="" />
                    </div>
                </div>
                <div className='lg:flex justify-between items-center mt-20'>
                    <div>
                        <img className='w-full' src="https://asset.mysupergeek.com/bundles/asterfreelance/_layout/images/MySuperGeekCom/benefits/2.svg?1658143617" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl mt-4'>Meet Deadlines</h1>
                        <p className='mt-4'>All tasks, reminders, and alerts are scheduled</p>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center mt-20'>
                    <div className='text-center'>
                    <h1 className='text-5xl '>Get Help</h1>
                        <p className='mt-4 '>Orbital available to consult and help 24/7</p>
                    </div>
                    <div>
                        <img className='w-full mt-4' src="https://asset.mysupergeek.com/bundles/asterfreelance/_layout/images/MySuperGeekCom/benefits/3.svg?1658143617" alt="" />
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default HomeCarousel;