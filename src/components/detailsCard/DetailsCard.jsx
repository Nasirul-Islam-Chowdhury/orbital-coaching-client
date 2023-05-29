import React, { useContext, useEffect, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { FaUserGraduate, FaUser, FaChevronRight } from 'react-icons/fa';
import Rating from '../../components/Rating/Rating';
import { context } from '../../components/AuthProvider/Authcontexts';
import { FiArrowRight } from "react-icons/fi";
import { Link, Navigate } from 'react-router-dom';


const DetailsCard = ({ d }) => {

    const [refresh, setRefresh] = useState(false)
    const [msg, setmsg] = useState(" ")
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${d.name}`)
            .then(res => res.json())
            .then(data => {

                setReview(data)
            })
    }, [refresh])
    const { user } = useContext(context);
    const teacherName = d.name;
    const userName = user?.displayName;
    const photo = user?.photoURL;
    const subject = d.subject;
    const handleReview = (e) => {
        e.preventDefault();
        const field = e.target;
        const reviewText = field.review.value;
        const review = { reviewText, userName, subject, photo, teacherName }
        const preMsg = <div>
            <span>Please Sign in first to write reviews <span><Link className='underline' to="/signin">(go to signin page)</Link></span></span>
        </div>
        if (!user) {
            return setmsg(preMsg)
        }
        setmsg(" ")
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
              
                if (data.acknowledged === true) {
                    field.reset()
                    window.alert("success")
                    setRefresh(() => !refresh)
                }
            })

    }
    return (
        <div className="container lg:px-40 md:px-20 rounded-none px-10 py-4">
            <div className=''>
                <figure><img className='h-80 object-center lg:w-1/3 w-full rounded-xl mx-auto' src={d.img} alt="Shoes" /></figure>
            </div>
            <div className=" text-white lg:w-4/6 w-full mx-auto mt-4">

                <h2 className="text-2xl font-bold font-primary mb-4">
                    Name: {d.name}</h2>
                <p className='font-primary'>{d.description}</p>
                <div className='flex lg:flex-row flex-col gap-4 justify-between my-4'>
                    <p className='flex items-center gap-2 font-semibold text-xl'><FaUserGraduate />{d.qualification}</p>
                    <p className=' font-semibold text-xl'>Experience: {d.experience}</p>
                    <p className='flex items-center gap-2 font-semibold text-xl'><MdLocationPin />{d.location}</p>
                </div>

                <div className='flex gap-2 items-center my-3'>
                    <p className='text-xl'>Ratings: </p>
                    <Rating review={review} ratings={d.rating} />
                </div>

                <div className='flex justify-between'>
                    <h2 className=" text-2xl font-bold font-primary mt-4">
                        Subject : {d.subject}</h2>
                    <h2 className=" text-2xl font-bold font-primary mt-4">
                        Price : ${d.price} <span className='text-sm'>(monthly)</span></h2>

                </div>
                <p className='text-white text-xl font-bold mt-8'>Please add a review</p>
                <div className='flex gap-2 items-center'>
                    <form className='flex justify-start  gap-2 items-center w-full' onSubmit={handleReview}>
                        <input required className='w-full border text-black border-black p-2 rounded-md mt-2' name="review" placeholder='write review' type="text" />
                        <button type="submit" className='btn btn-primary'>Submit Review</button>
                    </form>

                </div>
                <div>
                    <h1 className='text-xl font-bold text-green-500 mt-4'>{msg}</h1>
                </div>
                <div className='flex justify-start gap-2 items-center mt-10'>
                    <h1 className='text-2xl font-bold '>Reviews</h1>
                    <FiArrowRight className='w-6 h-6 ' /> </div>
                <div className='flex flex-col gap-3 my-5'>
                    {
                        review.length > 0 ?
                            review.map(review => <div className='my-2' key={review._id}>
                                <div className='flex justify-start items-center gap-4'>
                                    {
                                        review.photo ? <img className='w-7 h-7 rounded-full' src={review.photo} alt="" /> : <FaUser className='w-6 h-6 rounded-full' />
                                    }
                                    <h1 className='font-semibold text-lg'>{review?.userName}</h1>
                                    <p className='text-sm'>{review.date}</p>
                                </div>

                                <h1 className='my-2'>{review?.reviewText}</h1>
                            </div>)
                            :
                            <h1>No Reviews</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;