import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFullStar = star <= Math.floor(roundedRating);
        const isHalfStar = star === Math.ceil(roundedRating) && !Number.isInteger(roundedRating);

        if (isFullStar) {
          return <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />;
        } else if (isHalfStar) {
          return (
            <div key={star} className="relative">
              <Star className="w-5 h-5 text-gray-200" />
              <div className="absolute inset-0 overflow-hidden w-[50%]">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          return <Star key={star} className="w-5 h-5 fill-gray-200 text-gray-200" />;
        }
      })}
      {/* <span className="ml-1 text-sm text-gray-600">({roundedRating})</span> */}
    </div>
  );
};

export default StarRating;
