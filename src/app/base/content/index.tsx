import React from 'react';
import './index.css';
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../main';
import Login from '../../login';
import ViewParking from '../../parking/view-parking';
import BookParking from '../../parking/book-parking';
import ViewBookings from '../../parking/view-bookings';

interface Props {

}

function Content(props: Props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            loader: async (params: any) => {
                return <div>main loading</div>
            },
        }, {
            path: "login",
            element: <Login />,
            loader: async (params: any) => {
                return <div>login loading</div>
            }
        }, {
            path: "view-parking",
            element: <ViewParking />,
            loader: async (params: any) => {
                return <div>view parking loading</div>
            },
        }, {
            path: "book-parking",
            element: <BookParking />,
            loader: async (params: any) => {
                return <div>book parking loading</div>
            },
        }, {
            path: "view-bookings",
            element: <ViewBookings />,
            loader: async (params: any) => {
                return <div>view bookings loading</div>
            },
        }
    ]);

    return (
        <div className='content'>
            <RouterProvider router={router} />
        </div>
    );
}

export default Content;