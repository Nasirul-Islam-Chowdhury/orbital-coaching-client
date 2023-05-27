import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { context } from '../../components/AuthProvider/Authcontexts';

const Header = () => {
    const {user, logOut} = useContext(context)
    const [open, setOpen] = useState(false);
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className='bg-banner text-white'>
            <div className='flex justify-between  items-center container h-20'>
                <div>
                    <div>
                        <Link to='/'>
                            <div>
                                <img alt="" />
                            </div>
                            <div>
                                <h1 className='font-bold text-3xl uppercase font-secondary'>Orbital</h1>
                                <p className='text-sm  mt-[-6px]'>Academic Care</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <ul className={`flex lg:flex-row md:flex-row  flex-col text-white  justify-center lg:gap-8 md:gap-6 gap-14 text-center w-full bg-sm-device   lg:text-xl text-2xl py-5 rounded-xl duration-1000 z-[999] font-third md:static absolute ${open ? "top-20 left-0 bg-banner" : "top-[-1000px] left-0"} `}>
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
                        <li onClick={handleLogout} className='cursor-pointer'>
                            Logout
                        </li>
                        {
                            user &&  <li  className='cursor-pointer'>
                           <img src={user.photoURL} alt="" />
                        </li>
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='lg:hidden '>
                    {
                        open ? <HiOutlineX className="w-8 h-8" /> : <FaBars className="w-8 h-8" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;