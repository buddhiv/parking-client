/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './interface';

export const initialState: AuthState = {
    authenticated: false,
    user: null
};

export const authSlice = createSlice({
    name: 'feature/auth',
    initialState,
    reducers: {
        signIn(state, action) {
        },
        signOut(state, action) {
            state.authenticated = false;
            state.user = null;
        },
        signInSucceeded(state, action) {
            console.log('action', action.payload);

            state.authenticated = true;
            state.user = action.payload.user;
        },
        signInFailed(state, action) {
        },
    }
});

export const { actions: authActions } = authSlice;
