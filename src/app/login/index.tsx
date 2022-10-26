import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthenticated } from '../auth/selectors';
import { authActions } from '../auth/slice';
import './index.css';

interface Props {
}

function Login(props: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isAuthenticated = useSelector(selectAuthenticated)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        dispatch(authActions.signIn({
            username,
            password,
        }));
    };

    useEffect(() => {
        if(!!isAuthenticated){
            navigate('/view-bookings');
        }
    }, [isAuthenticated, navigate])

    return (
        <div className='login-screen-content'>

            <div className='login-helper-container float-left'>
                <div className='my-2 login-helper-title'>
                    Login to Parking Helper
                </div>

                <div>
                    Enter the Parking Helper application to gain access.
                </div>
            </div>

            <div className='login-form-container'>
                <div className='login-form'>
                    <div className='login-form-title my-2'>
                        Enter login details for Parking Helper
                    </div>

                    <div className='form-fields'>
                        <div className="mb-3">
                            <label className="form-label float-left">Username</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Username" onChange={(evt) => {
                                setUsername(evt.target.value);
                            }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label float-left">Password</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Password" onChange={(evt) => {
                                setPassword(evt.target.value);
                            }} />
                        </div>

                        <button onClick={login} className="btn btn-primary">Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;