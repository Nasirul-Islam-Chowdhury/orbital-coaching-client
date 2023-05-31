import React, { useState } from 'react';
import handleTitle from '../../../useTitle';

const AddService = () => {
    handleTitle("Add Service")
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const price = form.price.value
        const img = form.photourl.value
        const email = form.email.value
        const subject = form.subject.value
        const rating = form.rating.value
        const qualification = form.qualification.value
        const location = form.location.value
        const experience = form.experience.value
        const description = form.description.value
        if (description.length < 100) {
            return setError("Write atleast 100 words in description")
        }
        if (rating > 5) {
            return setError("Rate out of 5")
        }
        const data = { name, location, experience, img, email, qualification, description, rating, subject,price };
        fetch('https://orbital-coaching-server-production.up.railway.app/addService', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
              
            if(data.acknowledged){
                form.reset()
                alert("success")
            }
            })
    }
    return (
        <div className='bg-banner pb-10'>
            <div className="flex flex-col lg:w-2/4 w-full items-center min-h-screen  pt-6 sm:justify-center sm:pt-0 container">

                <div className=" min-w-full p-10 py-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>

                        <div className='my-4'>
                            <div >
                                <h3 className="text-4xl text-center uppercase font-primary font-bold "> Orbital</h3>
                                <p className='text-sm text-center font-semibold' >Academic care</p>
                                <h3 className='font-bold text-center text-2xl'>Want to be a teacher?</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <p>Name</p>
                            <input
                                required
                                placeholder='enter your name'
                                type="text"
                                name="name"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Email</p>
                            <input
                                required
                                placeholder='enter your email'
                                type="email"
                                name="email"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Photo URL</p>
                            <input
                                required
                                placeholder='enter your photoURL'
                                type="text"
                                name="photourl"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Subject</p>
                            <input
                                required
                                placeholder='subject'
                                type="text"
                                name="subject"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Qualification</p>
                            <input
                                required
                                placeholder='write your Qualification'
                                type="text"
                                name="qualification"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Experience</p>
                            <input
                                required
                                placeholder='enter your Experience'
                                type="text"
                                name="experience"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Location</p>
                            <input
                                required
                                placeholder='where are you from'
                                type="text"
                                name="location"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>How much will you rate you out of 5 in teaching?</p>
                            <input
                                required
                                placeholder='rating'
                                type="number"
                                name="rating"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <p>Price</p>
                            <input
                                required
                                placeholder='price'
                                type="number"
                                name="price"
                                className="block outline-0 w-full mt-1 p-2 border border-gray-600 rounded"
                            />
                        </div>

                        <div className="mt-4">
                            <p>Description</p>
                            <div className="flex flex-col items-start">
                                <textarea required name='description' placeholder='write about you atleast 100 word' className='w-full outline-0 h-60 border border-black rounded p-2'></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="text-red-500 font-semibold my-3">
                                {error &&
                                    <h1>Error: {error}</h1>
                                }
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary px-10 my-4'>
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService