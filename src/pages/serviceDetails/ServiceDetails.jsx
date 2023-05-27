import React, { useContext, useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import handleTitle from '../../../useTitle';
import DetailsCard from '../../components/detailsCard/DetailsCard';


const ServiceDetails = () => {

  handleTitle("service details")
  const data = useLoaderData();
  return (
    <div className=' w-full bg-banner '>
      {
        data?.map(d =><DetailsCard  key={d._id} d={d}/>)
      }
    </div>
  );
};

export default ServiceDetails;