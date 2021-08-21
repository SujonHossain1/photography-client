/* eslint-disable import/no-cycle */
import axios from 'axios';
import { adminSignOut } from '../store/actions/AdminAuthAction';
import store from '../store/store';

const token = localStorage.getItem('admin-auth-token');

const admin = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Administrator: `Bearer ${token}` || '',
    },
});

admin.interceptors.request.use((req) => {
    const { adminAuth } = store.getState();
    if (adminAuth.token) {
        req.headers.Administrator = `Bearer ${adminAuth.token}` || '';
    }
    return req;
});

admin.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        const { status } = error.response;
        if (status === 401) {
            store.dispatch(adminSignOut());
            console.log(error.response);
        }
        return Promise.reject;
    }
);

export default admin;
