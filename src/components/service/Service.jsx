import React from 'react';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
import handleTitle from '../../../useTitle';

const Service = ({service}) => {
  handleTitle("services")
    const {rating, name, subject,img,description,rate, _id} = service;
    return (
      <div className="card w-96 bg-base-300  shadow-3xl">
      <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">
          Subject: {subject}</h2>
          <p className='items-start text-start  '>{description.slice(0,120)}...</p>
          <Rating rate={rate} ratings={rating}/><br />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/serviceDetails/${_id}`}>
            see details</Link>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Service;