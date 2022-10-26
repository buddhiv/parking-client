import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../auth/selectors';
import AppHeader from '../../base/app-header';
import { selectUserParking } from '../selectors';
import { parkingActions } from '../slice';
import './index.css';

interface Props {

}

function ViewBookings(props: Props) {

    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const userParkingAreas = useSelector(selectUserParking);

    useEffect(() => {

        console.log('currentUser', currentUser);
        if (currentUser) {
            dispatch(parkingActions.fetchUserParking(currentUser.id));
        }
    }, [currentUser, dispatch]);

    return (
        <div className='view-bookings-content'>
            <AppHeader />

            <h2>My Bookings</h2>

            <table className="table bookings-table">
                <thead>
                    <tr>
                        <th>Booking Id</th>
                        <th>Parking Area</th>
                        <th>Parking Slot</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ViewBookings;