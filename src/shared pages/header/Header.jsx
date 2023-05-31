import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { context } from '../../components/AuthProvider/Authcontexts';

const Header = () => {
    const { user, logOut } = useContext(context)
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
                                <h1 className='font-bold text-3xl uppercase font-primary'>Orbital</h1>
                                <p className='text-sm  mt-[-6px]'>Academic Care</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <ul className={`flex lg:flex-row md:flex-row  flex-col text-white  justify-center lg:gap-8 md:gap-6 gap-8 text-center w-full bg-sm-device   lg:text-xl text-2xl py-5 rounded-b-xl duration-500 z-[999] font-primary md:static absolute ${open ? "top-20 left-0 bg-banner" : "top-[-1000px] left-0"} `}>
                        <li>
                            <Link onClick={()=>setOpen(!open)} to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={()=>setOpen(!open)} to="/services">Services</Link>
                        </li>
                        <li>
                            <Link onClick={()=>setOpen(!open)} to="/myReviews">My Reviews</Link>
                        </li>

                        <li>
                            <Link onClick={()=>setOpen(!open)} to="/addService">Add Service</Link>
                        </li>


                        {
                            !user &&
                            <>
                                <li>
                                    <Link onClick={()=>setOpen(!open)} to="/signup">Signup</Link>
                                </li>
                                <li>
                                    <Link onClick={()=>setOpen(!open)} to="/signin">Signin</Link>
                                </li></>
                        }


                        {
                            user && <>
                                <li onClick={handleLogout} className='cursor-pointer'>
                                    Logout
                                </li>
                                <li className='cursor-pointer w-8 h-8 mx-auto'>
                                    <img className='rounded-full' src={user.photoURL} alt="" />
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='lg:hidden md:hidden '>
                    {
                        open ? <HiOutlineX className="w-6 h-6" /> : <FaBars className="w-6 h-6" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;