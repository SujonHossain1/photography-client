/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
import Isotope from 'isotope-layout/js/isotope';
import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/photos/j1-full.jpg';
import image2 from '../../../assets/images/photos/j11-full.jpg';
import image3 from '../../../assets/images/photos/j13-full.jpg';
import image4 from '../../../assets/images/photos/j14-full.jpg';
import image5 from '../../../assets/images/photos/j15-full.jpg';
import image6 from '../../../assets/images/photos/j16-full.jpg';
import image7 from '../../../assets/images/photos/j17-full.jpg';
import image8 from '../../../assets/images/photos/j18-full.jpg';
import image9 from '../../../assets/images/photos/j19-full.jpg';
import image10 from '../../../assets/images/photos/j2-full.jpg';
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
                    <div className="row g-3">
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem outdoor">
                            <img className="img-fluid" src={image1} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem outdoor">
                            <img className="img-fluid" src={image2} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem nature portraits">
                            <img className="img-fluid" src={image3} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem portraits">
                            <img className="img-fluid" src={image4} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image5} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image6} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image7} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image8} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image9} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-6 col-12 filterItem people outdoor">
                            <img className="img-fluid" src={image10} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsotopeReact;
