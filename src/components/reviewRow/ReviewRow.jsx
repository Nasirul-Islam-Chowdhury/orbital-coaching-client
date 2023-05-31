import React, { useState } from 'react';

const ReviewRow = ({ r, review,setReview,setRefresh}) => {
    const [reviewText, setTextReview] = useState(r.reviewText)
    const handleReviewDelete = (_id) => {
        fetch(`https://orbital-coaching-server-production.up.railway.app/review/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const remaining = review.filter(r => r._id !== _id);
                setReview(remaining)
            })
            .catch(error => console.log(error))
    }

    return (
        <tr key={r._id}>
            <th></th>
            <td>{r.subject}</td>
            <td>{r.teacherName}</td>
            <td>{r.reviewText}</td>

            <td onClick={() => handleReviewDelete(r._id)} className=' text-red-600 cursor-pointer'>Delete Review</td>
            <td>
                    {/* modal body start */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
<div>
                        <div className='my-4'>
                            <div >
                                <h3 className="text-4xl text-center uppercase font-primary font-bold "> Orbital</h3>
                                <p className='text-sm text-center font-semibold' >Academic care</p>
                            </div>
                        </div>
                        <p className='font-primary mb-2'>Write your updated review</p>
                        <div className="flex flex-col items-start">
                            <textarea
                     name='reviewText'
                    
                     className='w-full h-20 border border-black'
                     placeholder='write review here'
                     ></textarea>
                        </div>

                        <div className="flex items-center mt-4">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white bg-banner">
                                Update
                            </button>
                        </div>
                        <div>
                    
                        </div>
                        </div>
                </div>
            </div>
            {/* modal body end */}
            </td>
        </tr>
    );
};

export default ReviewRow;