import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Service = ({service}) => {

    const {rating, subject,img,description,rate, _id} = service;
    return (
      <div className=" lg:w-96 w-full mx-auto bg-base-300 rounded-xl shadow-3xl">
     {
      img?
      <figure>
        <PhotoProvider>
      <PhotoView src={img}>
      <img className='w-full h-60 rounded-md object-cover cursor-pointer' src={img} alt="teacher" />
      </PhotoView>
    </PhotoProvider>
      
        </figure>
      :
      <FaUser className='w-6 h-6 rounded-full' />
     }
      <div className="items-center text-center p-5 ">
        <h2 className="card-title ">
          Subject: {subject}</h2>
          <h1 className='text-start'>{
            description.length > 100? 
            <p>{description.slice(0,100)}...</p>
            :
            <p>{description}</p>
          }</h1>
        <span className='flex gap-3'>
       Rating : {rating} <Rating rate={rate} ratings={rating}/>
        </span>
          <br />
    
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-btn">
            <Link to={`/serviceDetails/${_id}`}>
            View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Service;