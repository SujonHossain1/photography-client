import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/style.scss';
import App from './Containers/App';
import store from './store/store';

axios.defaults.baseURL = 'http://localhost:4000';
window.store = store;

const token = localStorage.getItem('user-auth-token');
if (token) {
    axios.defaults.headers.Authorization = token;
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
