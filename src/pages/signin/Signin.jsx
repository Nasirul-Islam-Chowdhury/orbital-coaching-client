import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='bg-banner'>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 container">
           
            <div className="w-full p-10 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form>
               
                    <div className='my-4'>                
                    <div >
                       <h3 className="text-4xl text-center uppercase font-primary font-bold "> Orbital</h3>
                        <p className='text-sm text-center font-semibold' >Academic care</p>
                
                    </div>
            </div>
                        <p>Name</p>
                        <div className="flex flex-col items-start">
                            <input
                            placeholder='enter your name'
                                type="text"
                                name="name"
                                className="block w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                  
                
                    <div className="mt-4">
                        <p>Password</p>
                        <div className="flex flex-col items-start">
                            <input
                            placeholder='enter password'
                                type="password"
                                name="password"
                                className="block w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                    </div>                 
                    <div className="flex items-center mt-4">
                        <button className="w-full px-4 py-2 tracking-wide text-white bg-banner">
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                    Don't have an account?{" "}
                    <span>
                        <Link to="/signup" className=" hover:underline" href="#">
                            Sign up
                        </Link>
                    </span>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>
                <div className="my-6 space-y-2">
                    <button
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Signin;