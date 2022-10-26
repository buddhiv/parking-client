/* eslint-disable max-len */
import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: any) => state['feature/auth'] || initialState;

export const selectAuthenticated = createSelector([selectDomain], (authState) => authState.authenticated);
export const selectCurrentUser = createSelector([selectDomain], (authState) => authState.user);
