import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const streamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_ORIGIN
    }),
    endpoints(builder) {
        return {
          fetchStream: builder.query({
            providesTags: (result, error, user) => {
              const tags = result.map((album) => {
                return { type: 'Stream'};
              });
              tags.push({ type: 'StreamPlatform' })
              return tags;
            },
                query: () => {
                    return {
                      url: '/watch/stream/',
                      method: 'GET',
                    };
                  },
            }),
          addStream: builder.mutation({
            invalidatesTags: (result, error, user) => {
              return [{ type: 'StreamPlatform' }];
            },
            query: (data) => {
              const formData = new FormData();
              formData.append('name', data.name);
              formData.append('about', data.about);
              formData.append('website', data.website);
              formData.append('image', data.image);
          
              return {
                  url: '/watch/stream/',
                  method: 'POST',
                  body: formData, 
                  headers: {
                  
                  },
              };
          },
            })
        };
    },
});

export const { useFetchStreamQuery, useAddStreamMutation } = streamApi;
export { streamApi };
