import { createSlice } from '@reduxjs/toolkit';

const usersFormSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        username: '',
        password: '',
    },
    reducers: {
        changeEmail(state, action) {
            state.email = action.payload
        },
        changeUsername(state, action) {
            state.username = action.payload
        },
        changePassword(state, action) {
            state.password = action.payload
        },
    }
});

export const { changeUsername, changeEmail, changePassword} = usersFormSlice.actions;

export const userFormReducer = usersFormSlice.reducer;
