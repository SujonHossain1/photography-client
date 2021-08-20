import React from 'react';

const Home = React.lazy(() => import('./Home/Home'));
const ServicesPage = React.lazy(() => import('./Services/Services'));
const Contact = React.lazy(() => import('./Contact/Contact'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/services', name: 'Categories', component: ServicesPage },
    { path: '/contact', name: 'Category', component: Contact },
];

export default Routes;
