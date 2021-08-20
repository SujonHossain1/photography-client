import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="footerItem">
                        <h5 className="footerTitle">LOCATION</h5>
                        <div className="location">
                            <p>Moonshine St. 14/05 Light City</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="footerItem">
                        <h5 className="footerTitle">FOLLOW</h5>
                        <div className="icons">
                            <a href="">
                                <FaFacebookF />
                            </a>
                            <a href="">
                                <FaGithub />
                            </a>
                            <a href="">
                                <FaLinkedinIn />
                            </a>
                            <a href="">
                                <FaRegEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="footerItem">
                        <h5 className="footerTitle">CONTACT</h5>
                        <div className="contact">
                            <a href="mailto:sujon.hossain758@gmail.com">
                                sujon.hossain758@gmail.com
                            </a>
                            <a href="tel:+088 01980653626">(+088) 01980653626</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copy">
                &copy; {new Date().getFullYear()} Sujon Hossain. Assignment by Programming Hero
            </p>
        </div>
    </footer>
);

export default Footer;
