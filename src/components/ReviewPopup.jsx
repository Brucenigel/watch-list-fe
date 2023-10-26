import React, { useState } from "react";
import { useAddReviewMutation } from "../store";
import RatingInput from "./RatingInput";

function ReviewPopup(id) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [description, setDecription] = useState("");
  const [isError, setIsError] = useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setRating("");
    setDecription("");
  };

  const [addReview] = useAddReviewMutation();

  const handleSubmitReview = async (event) => {
    event.preventDefault();
  
      const data = {
        id,
        rating,
        description,
    };
    if (rating !== "" && description !== "") {
    addReview(data).then(() => { 
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
        closePopup();
     
      })
    } else {
      setIsError('Please enter a rating!')
    }
  
     
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        Add Review
      </button>

      {isOpen && (
        <form onSubmit={handleSubmitReview}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-semibold mb-2">Add Review</h2>
              <RatingInput value={rating} onChange={setRating} />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDecription(e.target.value)}
                rows="4"
                required
                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              />
              {isError && (
                <h3 className="text-red-500">{isError}</h3>
              )}
              <div className="flex justify-end">
                <button onClick={closePopup} className="mr-2 text-gray-500">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-400 p-4 rounded-lg shadow-lg w-80">
            <p className="text-white text-xl font-semibold">
              Success! Movie Added.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPopup;
