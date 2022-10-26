import React from 'react';
import ParkingSlot from '../parking-slot';
import './index.css';

interface Props {
    parkingInformation: any
}

function ParkingArea(props: Props) {
    const { parkingInformation } = props;

    console.log('parking info', parkingInformation);

    return (
        <div className='parking-area my-2'>
            <h3>{parkingInformation.name}</h3>

            <div className='parking-slots-container'>
                {
                    parkingInformation.parkingSlots.map((slot: any, index: number) => {
                        return <ParkingSlot parkingSlotInformation={slot} key={index} />
                    })
                }
            </div>
        </div>
    );
}

export default ParkingArea; 