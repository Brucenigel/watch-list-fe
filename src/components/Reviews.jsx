import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ data }) => {
  const starRating = [];

  for (let i = 0; i < data.rating; i++) {
    starRating.push(
      <FontAwesomeIcon icon={faStar} className="text-yellow-500" key={i} />
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 m-4 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold text-yellow-500">
          {starRating}
        </div>
        <div className="text-gray-600">
          <p>By: {data.review_user}</p>
          <p>Date: {new Date(data.created).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="text-gray-800 mt-4 text-lg">{data.description}</p>
    </div>
  );
};

export default Review;
