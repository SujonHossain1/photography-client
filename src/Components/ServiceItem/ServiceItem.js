import React from 'react';
import styles from './ServiceItem.module.scss';

const ServiceItem = ({ service }) => (
    <div className={styles.serviceItem}>
        <figure>
            <img src={service.image} alt="" />
            <figcaption>
                <h2> {service.title} </h2>
                <p>
                    {service.des}
                    <br />
                    subscription: ${service.subscription}
                </p>
                <div className={styles.buttons}>
                    <button type="button" className="button">
                        View
                    </button>
                    <button type="button" className="button buy-btn">
                        Buy Now
                    </button>
                </div>
            </figcaption>
        </figure>
    </div>
);

export default ServiceItem;
