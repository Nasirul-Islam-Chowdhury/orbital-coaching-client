import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Rating = ({ ratings, review }) => {
  const ratingStars = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return <div key={index}>
      {

        ratings >= index + 1 ? <FaStar className="w-6 h-6 text-star" /> : ratings >= number ? <FaStarHalfAlt className="w-6 h-6 text-star" /> : <AiOutlineStar className="w-6 h-6 text-star" />
      }
    </div>
  })
  return <div className="flex justify-start gap-2 items-center">
    <span className=" flex justify-center gap-2">{ratingStars}</span>
    <div className="text-sm">
      {
        review && <h1>({review?.length} reviews)</h1>
      }
    </div>
  </div>
};


export default Rating;