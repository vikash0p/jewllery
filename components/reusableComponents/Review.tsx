"use client";
import React from "react";
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Review = ({ star }: { star: number }) => {
  const ratingStar = Array.from({ length: 5 }, (value, index) => {
    let halfNumber = index + 0.5;

    if (star >= index + 1) {
      // Full star
      return <IoIosStar size={25} className="text-yellow-400" key={index} />;
    } else if (star >= halfNumber) {
      // Half star
      return <IoMdStarHalf size={25} className="text-yellow-400" key={index} />;
    } else {
      // Empty star
      return (
        <IoMdStarOutline size={25} className="text-yellow-400" key={index} />
      );
    }
  });

  return <div className="flex">{ratingStar}</div>;
};

export default Review;
