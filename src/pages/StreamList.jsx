import React, { useState } from "react";
import { useFetchStreamQuery } from "../store";
import AddStreamPopup from "../components/AddStreamPopup";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";


function StreamList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { data, error, isFetching } = useFetchStreamQuery();
  const handleSearch = (search) => {
    setSearchQuery(search);
  }
  const handleMovieList = (movie) => { 
     navigate(`/movie-list/${movie}`)
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">List of Movies</h1>
      
      <AddStreamPopup />
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isFetching ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error.message}</p>
        ) : (
          data
          .filter((stream) =>
            stream.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
                .map((stream) => (
                 
            <div key={stream.id} className="bg-white rounded-lg shadow-lg cursor-pointer" onClick={()=>handleMovieList(stream.id)}>
                    <div className="relative">
                <img
                  src={stream.image}
                  alt={stream.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white font-semibold rounded-bl-lg">
                  {stream.name}
                </div>
              </div>
              <div className="p-4">
                <p className="mt-2 text-gray-700">{stream.about}</p>
                <p className="mt-2 text-blue-700">{stream.website}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default StreamList;
