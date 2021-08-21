import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import Container from './Container';

const Layout = () => {
    const [isAdmin, setIsAdmin] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.split('/');
        setIsAdmin(path.includes('admin'));
    }, [pathname]);

    return (
        <>
            {!isAdmin && <Header />}
            <Container />
            {!isAdmin && <Footer />}
        </>
    );
};

export default Layout;
