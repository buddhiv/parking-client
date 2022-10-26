import {
    call, put, takeLatest
} from 'redux-saga/effects';
import ParkingService from '../../service/parkingService';
import { IParkingResponse } from './interface';
import { parkingActions } from './slice';


export function* fetchAllParkingSlotsGenerator({ payload }: any) {
    try {
        const result: IParkingResponse = yield call(ParkingService.fetchParkingSlots);

        console.log('fetched data for parking slots');
        yield put(parkingActions.fetchAllParkingSlotsSuccess(result));

    } catch (error) {
        throw error
    }
}

export function* fetchUserParkingGenerator({ payload }: any) {
    try {
        const result: IParkingResponse = yield call(ParkingService.fetchUserParking, payload);

        console.log('fetched user parking', result);
        yield put(parkingActions.fetchUserParkingSuccess(result));

    } catch (error) {
        throw error
    }
}

export function* parkingSaga() {
    yield takeLatest(parkingActions.fetchAllParkingSlots.type, fetchAllParkingSlotsGenerator);
    yield takeLatest(parkingActions.fetchUserParking.type, fetchUserParkingGenerator);
}

export default parkingSaga;