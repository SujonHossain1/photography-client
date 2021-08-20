import React from 'react';
import ServiceItem from '../../../Components/ServiceItem/ServiceItem';
import styles from './Services.module.scss';

const Services = ({ services }) => (
    <div className={styles.serviceSection}>
        <h3 className="title">Our Services</h3>
        <div className="container mt-5">
            <div className="row g-3">
                {services.map((service) => (
                    <div className="col-md-4" key={service.id}>
                        <ServiceItem service={service} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Services;
