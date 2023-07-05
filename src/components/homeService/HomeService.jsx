import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../components/service/Service";
const HomeService = () => {
    const [loader, setLoader] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://orbital-coaching-server-nicchy123.vercel.app/homeServices`)
          .then((res) => res.json())
          .then((data) => {
            setLoader(false);
            setServices(data.slice(-3));
          });
      }, [loader]);
      if (loader) {
        return (
          <div className="h-screen flex items-center justify-center">
            <progress className="progress w-56 "></progress>
          </div>
        );
      }
    return (
        <div className='bg-white text-black lg:py-32 md:py-20 py-10'>
         <div className="container">
         <h1 className='text-center lg:text-5xl text-3xl  font-primary lg:pb-20 md:pb-16 pb-4'>
          Our Popular
           Services</h1>
            <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {services.map((service) => (
            <Service  service={service} key={service._id} />
          ))}
        </div>
<div className="text-center">
<button className="btn px-20 my-10">
    <Link to="/services">
    See All
    </Link>
</button>

</div>
            </div>

         </div>
        </div>
    );
};

export default HomeService;