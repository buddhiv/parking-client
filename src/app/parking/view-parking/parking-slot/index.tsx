import React from 'react';
import './index.css';

interface Props {
    parkingSlotInformation: any
}

function ParkingSlot(props: Props) {

    const { parkingSlotInformation } = props;

    return (
        <div className='parking-slot' style={{
            gridColumn: parkingSlotInformation.location.column,
            gridRow: parkingSlotInformation.location.row
        }}>
            <div className='slot-title'>
                {parkingSlotInformation.name}
            </div>
        </div>
    );
}

export default ParkingSlot;