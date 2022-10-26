/* eslint-disable max-len */
import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: any) => state['feature/parking'] || initialState;

export const selectAllParking = createSelector([selectDomain], (parkingState) => parkingState.parkingSlots);
export const selectUserParking = createSelector([selectDomain], (parkingState) => parkingState.userParking);
