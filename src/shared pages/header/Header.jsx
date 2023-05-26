import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState();
     
    return (
        <div className='bg-banner text-white'>
            <div className='lg:flex md:flex lg:justify-between  justify-center items-center container h-20'>
                <Link to='/'>
             <div>
<img  alt="" />
             </div>
                   <div>
        <h1 className='font-bold text-3xl uppercase font-secondary'>Orbital</h1>
                    <p className='text-sm  mt-[-6px]'>Academic Care</p>
                   </div>
                </Link>
                <ul className='lg:flex md:flex  justify-center text-center gap-8 text-xl font-third '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/signin">Signin</Link>
                    </li>
                    <li>
                        <Link>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;