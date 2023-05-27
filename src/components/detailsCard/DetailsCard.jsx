import React, { useContext, useEffect, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { FaUserGraduate,FaUser } from 'react-icons/fa';
import Rating from '../../components/Rating/Rating';
import { context } from '../../components/AuthProvider/Authcontexts';


const DetailsCard = ({ d }) => {
    const {setLoading} = useContext(context)
    const [refresh, setRefresh] = useState(false)
    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/reviews/${d.name}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
          setReview(data)
        })
    }, [refresh])
    const { user } = useContext(context);
    const serviceId = d._id;
    const teacherName = d.name;
    const userName = user?.displayName;
    const photo = user?.photoURL;
    const subject = d.subject;
    const handleReview = (e) => {
        e.preventDefault();
        const field = e.target;
        const reviewText = field.review.value;
        const review = { reviewText, userName, subject, photo, teacherName }
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    field.reset()
                    window.alert("success")
                    setRefresh(()=>!refresh)
                }
            })

    }
    return (
        <div className="container lg:px-40 md:px-20 rounded-none px-10 py-4">
            <div className=''>
                <figure><img className='h-[calc(100vh-38rem)] w-1/3 rounded-full mx-auto' src={d.img} alt="Shoes" /></figure>
            </div>
            <div className=" text-white w-4/6 mx-auto mt-4">

                <h2 className="text-2xl font-bold font-primary mb-4">
                    Name: {d.name}</h2>
                <p className='font-secondary'>{d.description}</p>
                <div className='lg:flex justify-between my-4'>
                    <p className='flex items-center gap-2 font-semibold text-xl'><FaUserGraduate />{d.qualification}</p>
                    <p className=' font-semibold text-xl'>experience: {d.experience}</p>
                    <p className='flex items-center gap-2 font-semibold text-xl'><MdLocationPin />{d.location}</p>
                </div>

                <h2 className=" text-2xl font-bold font-primary mt-4">
                    Subject: {d.subject}</h2>
                <div className='flex gap-2 items-center my-3'>
                    <p className='text-xl'>Ratings: </p>
                    <p>{d.rating}</p>
                    <Rating rate={d.rate} ratings={d.rating} />
                </div>
                <br />
                <p className='text-white text-xl font-bold'>Please add a review</p>
                <div className='flex gap-2 items-center'>
                    <form className='flex justify-start gap-2 items-center w-full' onSubmit={handleReview}>
                        <input className='w-full border text-black border-black p-2 rounded-md mt-2' name="review" placeholder='write review' type="text" />
                        <button type="submit" className='btn btn-secondary'>Submit Review</button>
                    </form>
                </div>
                <div className='flex flex-col gap-3 my-5'>
                    {
                        review.map(review => <div key={review._id}>
                           <div className='flex justify-start gap-2'>
                            {
                                review.photo ? <img className='w-6 h-6 rounded-full' src={review.photo} alt="" /> : <FaUser className='w-6 h-6 rounded-full'/>
                            }
                           <div>
                           <h1>{review.reviewText}</h1>
                           </div>
                           </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;