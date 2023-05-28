import React, { useEffect, useState } from 'react';
import Service from '../../components/service/Service';
import handleTitle from '../../../useTitle';

const Services = () => {
    handleTitle("Services")
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoader(false)
            })
    }, [loader])
    
    if(loader){
        return <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56 "></progress>
        </div>
    }
    return (
        <div className='bg-banner p-5'>

        <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container '>
            {
                services.map(service=> <Service service={service} key={service._id}/>)
            }
        </div>
        </div>
    );
};

export default Services;