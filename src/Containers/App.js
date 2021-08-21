import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { isUserLogin } from '../store/actions/authAction';
import Layout from './Layout';

const App = () => {
    const token = localStorage.getItem('user-auth-token');
    const { authenticate } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (token) {
        const result = jwtDecode(token);
        console.log('token result: ', result);
    }

    useEffect(() => {
        if (!authenticate) {
            dispatch(isUserLogin());
        }
    }, [authenticate, dispatch]);
    return (
        <BrowserRouter>
            <Toaster position="left-bottom" reverseOrder={false} />
            <Layout />
        </BrowserRouter>
    );
};

export default App;
