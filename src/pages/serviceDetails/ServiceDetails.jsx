import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import handleTitle from '../../../useTitle';
import Rating from '../../components/Rating/Rating';
const ServiceDetails = () => {
    handleTitle("service details")
    const data = useLoaderData();
 
    return (
        <div className=' w-full bg-banner '>
            {
                   data.map(d=>
                    <div key={d._id} className="container lg:px-40 md:px-20 rounded-none px-10 py-4">
                    <div className=''>
                    <figure><img className='h-[calc(100vh-28rem)] w-1/2 rounded-full mx-auto' src={d.img} alt="Shoes" /></figure>
                    </div>
                    <div className=" text-white w-4/6 mx-auto mt-4">
                   
                   <h2 className="text-2xl font-bold font-primary mb-4">
                        Name: {d.name}</h2>
                      
                
                        <p className='font-secondary'>{d.description}</p>                  
                      <div className='lg:flex justify-between my-4'>
                      <p className='flex items-center gap-2 font-semibold text-xl'><FaUserGraduate/>{d.qualification}</p>
                        <p className=' font-semibold text-xl'>experience: {d.experience}</p>
                        <p className='flex items-center gap-2 font-semibold text-xl'><MdLocationPin/>{d.location}</p>
                      </div>
                         
                      <h2 className=" text-2xl font-bold font-primary mt-4">
                        Subject: {d.subject}</h2>
                      <div className='flex gap-2 items-center my-3'>
                       <p className='text-xl'>Ratings: </p>
                        <p>{d.rating}</p>
                      <Rating rate={d.rate} ratings={d.rating}/>
                      </div>
                        <br />
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          <Link to={`/serviceDetails/${d._id}`}>
                          see details</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                    )
            }
        </div>
    );
};

export default ServiceDetails;