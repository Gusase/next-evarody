import React, { useEffect, useState } from "react";

const Rating = ({ setScore, clear }) => {
  const [rating, setRating] = useState(null);
  
  useEffect(() => {
    setRating(null)
    setScore(rating);
  }, [clear]);

  const handleRatingChange = (value) => {
    setRating(value);
    setScore(value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setRating(null);
    setScore(null);
  };

  return (
    <div className="flex items-center">
      {rating && (
        <button onClick={handleCancel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRatingChange(value)}>
          {rating && value <= rating ? (
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          )}
        </button>
      ))}

      {rating && (
        <>
          <p className="ms-1 font-medium text-gray-500 inline-block dark:text-gray-400">
            {rating}
          </p>
          <p className="ms-1 font-medium text-gray-500 inline-block dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 font-medium text-gray-500 inline-block dark:text-gray-400">
            5
          </p>
        </>
      )}
    </div>
  );
};

export default Rating;
