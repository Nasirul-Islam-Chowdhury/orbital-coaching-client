import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Rating = ({ ratings, rate }) => {
  const ratingStars = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return <div key={index}>
      {
        ratings < index ? <AiOutlineStar className="w-6 h-6 text-star" /> : ratings >= index + 1 ? <FaStar className="w-6 h-6 text-star" /> : <FaStarHalfAlt className="w-6 h-6 text-star" />
      }
    </div>
  })
  return <div className="flex justify-start gap-2 items-center">
    <span className=" flex justify-center gap-2">{ratingStars}</span>
    <h1 className="text-sm"> ({rate} reviews)</h1>
  </div>
};


export default Rating;