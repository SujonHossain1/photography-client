/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import image from '../../assets/images/services/01.jpg';
import image2 from '../../assets/images/services/02.jpg';
import image3 from '../../assets/images/services/03.jpg';
import image4 from '../../assets/images/services/04.jpg';
import image5 from '../../assets/images/services/05.jpg';
import image6 from '../../assets/images/services/06.jpg';
import Footer from '../../Components/Common/Footer/Footer';
import styles from './Home.module.scss';
import IsotopeReact from './Isotope/Isotope';
import Services from './Services/Services';

const services = [
    {
        id: 1,
        image,
        title: 'OUTDOOR',
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
    {
        id: 2,
        image: image2,
        title: 'PORTRAITS',
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
    {
        id: 3,
        image: image3,
        title: 'PEOPLE',
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
    {
        id: 4,
        image: image4,
        title: 'FACES',
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
    {
        id: 5,
        title: 'NATURE',
        image: image5,
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
    {
        id: 6,
        title: 'KIDS',
        image: image6,
        des: 'Lily likes to play with crayons and pencils',
        subscription: 10,
    },
];

const Home = () => (
    <>
        <div className={styles.home}>
            <Services services={services} />
            <IsotopeReact />
        </div>

        <Footer />
    </>
);
export default Home;
