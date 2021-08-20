/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
import Isotope from 'isotope-layout/js/isotope';
import React, { useEffect, useRef, useState } from 'react';
import image from '../../../assets/images/photos/j1-full.jpg';
import image2 from '../../../assets/images/photos/j14-full.jpg';
import image4 from '../../../assets/images/photos/j16-full.jpg';
import image5 from '../../../assets/images/photos/j2-full.jpg';
import image15 from '../../../assets/images/photos/j7-full.jpg';
import image7 from '../../../assets/images/photos/w1.jpg';
import image8 from '../../../assets/images/photos/w11.jpg';
import image9 from '../../../assets/images/photos/w2.jpg';
import image10 from '../../../assets/images/photos/w3.jpg';
import image12 from '../../../assets/images/photos/w6.jpg';
import image13 from '../../../assets/images/photos/w7.jpg';
import image14 from '../../../assets/images/photos/w9.jpg';
import './Isotope.scss';

const IsotopeReact = () => {
    const isotope = useRef();

    const [filterKey, setFilterKey] = useState('*');
    const handleFilterKeyChange = (key) => () => setFilterKey(key);
    console.log(filterKey);

    useEffect(() => {
        isotope.current = new Isotope('.filterContainer', {
            itemSelector: '.filterItem',
            layoutMode: 'fitRows',
        });
        // cleanup
        return () => isotope.current.destroy();
    }, []);
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    return (
        <div className="isotopeWrapper">
            <div className="container">
                <h3 className="title">Our Selected Shorts</h3>
                <ul className="filterSelects">
                    <li className="filterSelectItem" onClick={handleFilterKeyChange('*')}>
                        All
                    </li>
                    <li className="filterSelectItem" onClick={handleFilterKeyChange('outdoor')}>
                        Outdoor
                    </li>
                    <li className="filterSelectItem" onClick={handleFilterKeyChange('portraits')}>
                        Portraits
                    </li>
                    <li className="filterSelectItem" onClick={handleFilterKeyChange('people')}>
                        People
                    </li>
                    <li className="filterSelectItem" onClick={handleFilterKeyChange('nature')}>
                        Nature
                    </li>
                </ul>
                <div className="filterContainer">
                    <div className="filterItem portraits">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="filterItem ">
                        <img className="img-fluid" src={image2} alt="" />
                    </div>

                    <div className="filterItem  nature">
                        <img className="img-fluid" src={image5} alt="" />
                    </div>
                    <div className="filterItem portraits people ">
                        <img className="img-fluid" src={image15} alt="" />
                    </div>
                    <div className="filterItem people outdoor">
                        <img className="img-fluid" src={image7} alt="" />
                    </div>
                    <div className="filterItem portraits nature">
                        <img className="img-fluid" src={image4} alt="" />
                    </div>
                    <div className="filterItem people portraits outdoor">
                        <img className="img-fluid" src={image8} alt="" />
                    </div>
                    <div className="filterItem  nature">
                        <img className="img-fluid" src={image9} alt="" />
                    </div>
                    <div className="filterItem portraits  ">
                        <img className="img-fluid" src={image10} alt="" />
                    </div>
                    <div className="filterItem  nature">
                        <img className="img-fluid" src={image12} alt="" />
                    </div>
                    <div className="filterItem people outdoor">
                        <img className="img-fluid" src={image13} alt="" />
                    </div>
                    <div className="filterItem people outdoor">
                        <img className="img-fluid" src={image14} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsotopeReact;
