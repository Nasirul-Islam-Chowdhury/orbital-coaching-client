import React from 'react';

const ReviewRow = ({ r ,loader,setLoader, review,setReview,}) => {
    const handleReviewDelete = (_id) => {
        fetch(`http://localhost:5000/review/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const remaining = review.filter(r => r._id !== _id);
                setReview(remaining)
            })
            .catch(error => console.log(error))
    }

const handleUpdateReview = (e)=>{
    e.preventDefault();
    const form = e.target;
    const review = form.reviewText.value;
    fetch(`http://localhost:5000/review/${r._id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({review})
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data)
        setLoader(!loader)
    })
}



    return (
        <tr key={r._id}>
            <th></th>
            <td>{r.subject}</td>
            <td>{r.teacherName}</td>
            <td>{r.reviewText}</td>
            <td  className=' text-green-600 cursor-pointer'>
                <label htmlFor="my-modal-3" className="btn">Update Review</label>

            </td>
            <td onClick={() => handleReviewDelete(r._id)} className=' text-red-600 cursor-pointer'>Delete Review</td>
            <td>
                    {/* modal body start */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdateReview}>

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
                    </form>
                </div>
            </div>
            {/* modal body end */}
            </td>
        </tr>
    );
};

export default ReviewRow;