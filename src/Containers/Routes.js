import React from 'react';

const Home = React.lazy(() => import('./Home/Home'));
const ServicesPage = React.lazy(() => import('./Services/Services'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const Login = React.lazy(() => import('./Auth/Login'));
const SignUp = React.lazy(() => import('./Auth/SignUp'));

/** ****** Admin ******* */
const Admin = React.lazy(() => import('../admin/pages/Admin'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/services', name: 'Categories', component: ServicesPage },
    { path: '/contact', name: 'Category', component: Contact },
    { path: '/login', name: 'Login', component: Login },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/admin/dashboard', name: 'Category', component: Admin },
];

export default Routes;
