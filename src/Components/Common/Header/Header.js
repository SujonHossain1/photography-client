import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo2.png';
import './Header.scss';

function Header() {
    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        const width = window.innerWidth;
        if (width < 768) {
            Array.from(links).map((link) =>
                link.addEventListener('click', () => {
                    document.querySelector('.navbar-toggler').click();
                })
            );
        }
    }, []);

    useEffect(() => {
        const nav = document.querySelector('.navbar');
        function fixNav() {
            if (window.scrollY >= 50) {
                nav.classList.add('fixed');
            } else {
                nav.classList.remove('fixed');
            }
        }
        window.addEventListener('scroll', fixNav);
        document.querySelector('.navbar-toggler').addEventListener('click', () => {
            nav.classList.add('fixed');
        });
    }, []);
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light sticky">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="Sujon Hossain" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        type="button"
                    >
                        <FaBars className="toggle__bar" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">
                                    It's Sujon
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/join">
                                    <div className="btn btn-style rounded btn-sm">Join</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
