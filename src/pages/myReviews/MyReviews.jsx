import React, { useContext, useEffect, useState } from 'react';
import handleTitle from '../../../useTitle';
import { context } from '../../components/AuthProvider/Authcontexts';

const MyReviews = () => {
    const { user } = useContext(context)
    const [refresh, setRefresh] = useState(true)
    const [review, setReview] = useState([]);
    handleTitle("My Reviews");
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRefresh(false)
                setReview(data)
            })
    }, [refresh])
    const handleReviewUpdate = (_id)=>{
        console.log(_id)
    }
    const handleReviewDelete = (_id)=>{
        console.log(_id)
    }
    if (refresh) {
        return <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56 "></progress>
        </div>
    }
    return (
        <div className="overflow-x-scroll  ">
            <table className=" container table-zebra table  w-full  my-4">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Subject Name</th>
                        <th>Teacher Name</th>
                        <th>Review</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        review ?
                            review.map(r =>
                                <tr key={r._id}>
                                    <th></th>
                                    <td>{r.subject}</td>
                                    <td>{r.teacherName}</td>
                                    <td>{r.reviewText}</td>
                                    <td onClick={()=>handleReviewUpdate(r._id)} className=' text-green-600 cursor-pointer'>Update Review</td>
                                    <td onClick={()=>handleReviewDelete(r._id)} className=' text-red-600 cursor-pointer'>Delete Review</td>
                                </tr>)
                            :
                            ""
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;