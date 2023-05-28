import React, { useContext, useEffect, useState } from 'react';
import handleTitle from '../../../useTitle';
import { context } from '../../components/AuthProvider/Authcontexts';
import ReviewRow from '../../components/reviewRow/ReviewRow';

const MyReviews = () => {
    const { user } = useContext(context)

    const [loader, setLoader] = useState(true)
    const [review, setReview] = useState([]);
    handleTitle("My Reviews");
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?name=${user.displayName}`)
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setReview(data)
            })
    }, [loader])
    if (loader) {
        return <div className='h-screen flex items-center justify-center'>
            <progress className="progress w-56 "></progress>
        </div>
    }
    return (
        <div className="overflow-x-scroll  ">
            


            {
                review.length > 0 ?
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

                                review.map(r =>
                                <ReviewRow setReview={setReview} key={r._id} review={review} setLoader={setLoader}   r={r} loader={loader} />)

                            }

                        </tbody>
                    </table>
                    :
                    <div className='h-screen flex justify-center items-center'>
                        <h1 className='font-bold text-3xl'>You didn't write any review yet</h1>
                    </div>
            }


        </div>
    );
};

export default MyReviews;
