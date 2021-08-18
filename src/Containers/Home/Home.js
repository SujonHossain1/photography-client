import React from 'react';
import image from '../../assets/images/services/01.jpg';
import styles from './Home.module.scss';

const Home = () => (
    <div className={styles.home}>
        <div className={styles.serviceSection}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.serviceItem}>
                            <figure>
                                <img src={image} alt="" />
                                <figcaption>
                                    <h2>OUTDOOR</h2>
                                    <p>Lily likes to play with crayons and pencils</p>
                                    <button type="button" className="">
                                        View
                                    </button>
                                    <button type="button" className="button buy-btn">
                                        Buy Now
                                    </button>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
