import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
const Header = () => {
    const [open, setOpen] = useState(false);
console.log(import.meta.env.VITE_appId)
    return (
        <div className='bg-banner text-white'>
            <div className='lg:flex md:flex lg:justify-between  justify-center items-center container h-20'>
                <Link to='/'>
                    <div>
                        <img alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl uppercase font-secondary'>Orbital</h1>
                        <p className='text-sm  mt-[-6px]'>Academic Care</p>
                    </div>
                </Link>
                <ul className={`lg:flex md:flex  justify-center text-center gap-8 text-xl z-[999] font-third md:static absolute ${open ? "top-20":"top-[-900px]"} `}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/signin">Signin</Link>
                    </li>
                    <li>
                        <Link>Logout</Link>
                    </li>
                </ul>
                <div onClick={()=>setOpen(!open)} className='lg:hidden block'>
                    {
                        open? <FaBars className="w-8 h-8"/> : <HiOutlineX className="w-8 h-8"/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;