import React, { useState } from "react";
import { useAddStreamMutation } from "../store";

function AddStreamPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [website, setwebsite] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [image, setImage] = useState(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setName("");
    setAbout("");
    setwebsite("");
    setImage(null);
    setIsSuccess(false);
  };

  const [addStream] = useAddStreamMutation();

  const submitStream = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name,
        about,
        website,
        image, 
      };
      await addStream(data);
      setIsSuccess(true);
      closePopup();
    } catch (err) {}
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        Add Platform
      </button>

      {isOpen && (
        <form onSubmit={submitStream}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-semibold mb-2">Add Movie</h2>
              <input
                type="text"
                placeholder="Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Description"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows="4"
                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              />
               <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)} // Preview the selected image
                  alt={name}
                  className="w-20 h-20 object-cover rounded-md mb-2"
                />
              )}
              <input
                placeholder="Website URL"
                value={website}
                onChange={(e) => setwebsite(e.target.value)}
                rows="4"
                className="w-full mb-2 p-2 border border-gray-300 rounded-md"
              />
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

export default AddStreamPopup;
