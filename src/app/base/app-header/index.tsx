import React from 'react';
import './index.css';

interface Props {

}

function AppHeader(props: Props) {
    return (
        <div className='app-header px-4 my-2'>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/view-parking">View Parking</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/book-parking">Book Parking</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/view-bookings">View Bookings</a>
                </li>
            </ul>
        </div>
    );
}

export default AppHeader;   