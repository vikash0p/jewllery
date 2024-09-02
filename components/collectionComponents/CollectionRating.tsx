"use client";
import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CollectionRating: React.FC = () => {
  const {
    filters: { rate },
    handleRatingCollectionFun,
  } = useGlobalFilterDataContext();
    console.log("🚀 ~ file: CollectionRating.tsx:9 ~ rate:", rate);


  const handleStarClick = (index: number) => {
    handleRatingCollectionFun(index + 1); // Assuming handleRatingCollectionFun expects a 1-based rating
  };

  return (
    <div>
      <h5 className="text-xl font-bold">Rating</h5>
      <div className="flex flex-row cursor-pointer">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            {rate > i ? (
              <AiFillStar
                size={25}
                className="text-yellow-400"
                onClick={() => handleStarClick(i)}
              />
            ) : (
              <AiOutlineStar
                size={25}
                className="text-yellow-400"
                onClick={() => handleStarClick(i)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionRating;
