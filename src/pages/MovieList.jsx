import AddMoviesPopup from "../components/AddMoviesPopup";
import ReviewPopup from "../components/ReviewPopup";
import Reviews from "../components/Reviews";
import { useFetchMovieQuery } from "../store";
import { useParams } from "react-router-dom";

function MovieList() {
  const { id } = useParams();
  const { data: movie, isFetching, error } = useFetchMovieQuery(id);
  return (
    <div className="container mx-auto p-4">
      <AddMoviesPopup/>
      <h1 className="text-3xl font-semibold mb-4">{movie?.name}</h1>

      {isFetching ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error.message}</p>
      ) : (
        movie.watchlist.map((data) => {
          return (
            <div key={data.id} className="bg-white rounded-lg shadow-lg p-4 mt-4">
              <div className="relative">
                <img
                  src={data.image} 
                  alt={data.title}
                  className="w-full h-64 object-contain rounded-t-lg"
                />
                <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white font-semibold rounded-bl-lg">
                  {data.title}
                </div>
              </div>
              <div className="p-4">
                <h1>{ data.title}</h1>
                <p className="text-gray-700 mt-2">Category: {data.description}</p>
                <div className="flex items-center mt-4">
                  <p className="text-gray-700">
                    Average Rating: {data.avg_rating}
                  </p>
                  <p className="text-gray-700 ml-4">
                    Number of Ratings {data.number_rating}
                  </p>
                </div>
                <ReviewPopup movie_id={data.id} />
                <h3 className="text-lg font-semibold">Reviews</h3>
                {data.reviews?.map((review) => {
                  return (
                    <div className="mt-4" key={review.id}>
                      <ul className="mt-2">
                        <Reviews data={review} />
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default MovieList;
