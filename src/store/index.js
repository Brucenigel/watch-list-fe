import { configureStore } from '@reduxjs/toolkit'
import { accountApi } from './apis/accountApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { streamApi } from './apis/streamApi';
import authSlice from './slice/authSlice';
import { moviesApi } from './apis/moviesApi';


export const store = configureStore(
    {
        reducer: {
            auth: authSlice,
            [accountApi.reducerPath]: accountApi.reducer,
            [streamApi.reducerPath]: streamApi.reducer,
            [moviesApi.reducerPath]: moviesApi.reducer,
          
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware()
              .concat(accountApi.middleware)
              .concat(streamApi.middleware)
              .concat(moviesApi.middleware)
              
          },
    }
)

setupListeners(store.dispatch);

export default store;
// export { useAddReviewMutation } from './apis/reviewApi'
export { useFetchMovieQuery, useAddReviewMutation, useAddMoviesMutation } from './apis/moviesApi';
export { useLoginMutation, useRegisterMutation } from './apis/accountApi';
export { useFetchStreamQuery,useAddStreamMutation } from './apis/streamApi';
