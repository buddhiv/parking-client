import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectAuthenticated } from '../../auth/selectors';
import { authActions } from '../../auth/slice';
import './index.css';

interface Props {

}

function Header(props: Props) {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectAuthenticated);

    const handleLoginButton = () => {
        if (isAuthenticated) {
            dispatch(authActions.signOut({}));
        }
    }

    return (
        <div className='header px-4'>
            <a href='/' className='title-text'>
                Parking Helper
            </a>

            <a href='/login'>
                <button type="button" className='btn btn-primary' onClick={handleLoginButton}>
                    {isAuthenticated ? 'Log out' : 'Log in'}
                </button>
            </a>
        </div >
    );
}

export default Header;