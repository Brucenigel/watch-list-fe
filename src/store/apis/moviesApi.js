import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ORIGIN,
  }),
  endpoints(builder) {
    return {
      fetchMovie: builder.query({
        query: (id) => {
          return {
            url: `/watch/stream/${id}/`,
            method: 'GET',
          };
        },
        providesTags: (result, error, id) => {
          if (result) {
            const tags = result.watchlist.flatMap(watchlist => {
              return watchlist.reviews.map(({ id }) => ({ type: 'Movies', id }));
            });
            return [...tags, { type: 'Movies', id: 'LIST' }];
          } else {
            return [];
          }
        }
      }), 
      addReview: builder.mutation({
        query: (review) => {
          const token = localStorage.getItem('token');
          return {
            url: `watch/${review.id.movie_id}/review-create/`,
            method: "POST",
            headers: {
              Authorization: `Token ${token}`,
            },
            body: {
              rating: review.rating,
              description: review.description,
            },
          };
        },
        invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
      }),
      addMovies: builder.mutation({
        query: (data,) => {
          const formData = new FormData();
          formData.append('title', data.name);
          formData.append('description', data.description);
          formData.append('platform',data.id);
          formData.append('image', data.image);
      
          return {
              url: '/watch/list/',
              method: 'POST',
              body: formData, 
          };
      },
        invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
      })
    };
  },
});

export const { useFetchMovieQuery, useAddReviewMutation , useAddMoviesMutation } = moviesApi;
export { moviesApi };
