import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState();
     
    return (
        <div className='bg-blue-600 text-white'>
            <div className='lg:flex md:flex lg:justify-between  justify-center items-center container h-16'>
                <h1 className=' font-bold text-2xl'>Orbital Coaching Center</h1>
                <ul className='lg:flex md:flex  justify-center text-center gap-8 text-xl '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
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