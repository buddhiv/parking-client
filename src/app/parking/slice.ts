/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ParkingState } from './interface';

export const initialState: ParkingState = {
    parkingSlots: [],
    userParking: []
};

export const parkingSlice = createSlice({
    name: 'feature/parking',
    initialState,
    reducers: {
        fetchAllParkingSlots(state, action) {
        },
        fetchAllParkingSlotsSuccess(state, action) {
            state.parkingSlots = action.payload;
        },
        fetchUserParking(state, action) {
        },
        fetchUserParkingSuccess(state, action) {
            state.userParking = action.payload;
        },
        addParking(state, action) {
        },
        removeParking(state, action) {
        },
    }
});

export const { actions: parkingActions } = parkingSlice;
