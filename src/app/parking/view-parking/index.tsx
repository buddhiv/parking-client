import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../base/app-header';
import { selectAllParking } from '../selectors';
import { parkingActions } from '../slice';
import './index.css';
import ParkingArea from './parking-area';

interface Props {

}

function ViewParking(props: Props) {

    const dispatch = useDispatch();

    const allParkingAreas = useSelector(selectAllParking);

    useEffect(() => {
        dispatch(parkingActions.fetchAllParkingSlots({}));
    }, []);

    return (
        <div className='view-parking-content'>
            <AppHeader />

            <div className='parking-areas-container'>
                {
                    allParkingAreas.map((area: any, index: number) => {
                        return <ParkingArea parkingInformation={area} key={index}/>
                    })
                }
            </div>

        </div>
    );
}

export default ViewParking;