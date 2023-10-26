import React from 'react';

const RatingInput = ({ value, onChange }) => {
  const maxRating = 5; // Maximum rating value

  return (
    <div className="flex items-center space-x-2">
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${
            index < value
              ? 'text-yellow-500'
              : 'text-gray-300 hover:text-yellow-500'
          } text-2xl`}
          onClick={() => onChange(index + 1)}
        >
          &#9733; {/* Unicode star character */}
        </span>
      ))}
    </div>
  );
};

export default RatingInput;
