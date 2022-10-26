import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authSlice } from '../app/auth/slice';
import { parkingSlice } from '../app/parking/slice';
import { rootSaga } from './rootSaga';

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        'feature/auth': authSlice.reducer,
        'feature/parking': parkingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware]
    )
});

sagaMiddleware.run(rootSaga);

export default store;
