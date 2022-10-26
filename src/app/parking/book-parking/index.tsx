import React from 'react';
import AppHeader from '../../base/app-header';
import './index.css';

interface Props {

}

function BookParking(props: Props) {
    return (
        <div className='book-parking-content'>
            <AppHeader />

            Book Parking
        </div>
    );
}

export default BookParking;