import React, { useEffect, useState } from 'react';
import Service from '../../components/service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
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