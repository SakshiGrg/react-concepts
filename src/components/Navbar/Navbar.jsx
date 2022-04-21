import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar--default">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link to="">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <ul className="nav navbar__list">
                    {/* <li className="navbar__list-item">
                        <Link to="">LearnReact</Link>
                    </li> */}
                    <li className="navbar__list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/overview"> Overview</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/products"> Products</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/customHook"> CustomHook</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
