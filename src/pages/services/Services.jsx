import React, { useEffect, useState } from "react";
import Service from "../../components/service/Service";
import handleTitle from "../../../useTitle";

const Services = () => {
  handleTitle("Services");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const pages = Math.ceil(count / size);
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setCount(data.count);
        setServices(data.services);
      });
  }, [loader,page,size]);
  if (loader) {
    return (
      <div className="h-screen flex items-center justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  return (
    <div className="bg-banner p-5">
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
          {services.map((service) => (
            <Service count={count} service={service} key={service._id} />
          ))}
        </div>
        <div className="flex justify-center gap-4 my-10">
          {[...Array(pages).keys()].map((p) => (
            <div  onClick={() => setPage(p)} key={p}>
              <button className={` btn ${p === page && ' btn bg-white text-black'}`}>{p+1}</button>
            </div>
          ))}
          <select onClick={()=>setPage(0)} onChange={(e)=>setSize(e.target.value)} className="">
            <option  value="6">6</option>
            <option value="12"> 12</option>
            <option value="15">15</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
