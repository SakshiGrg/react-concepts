import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './Navbar.css';

const Navbar = (props) => {
    useEffect(() => {
        console.log('Navbar comp Re-renders/Update');
    });
    return (
        <nav className="navbar navbar--default">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="nav navbar__list">
                    <li className="navbar__list-item">
                        <Link to="">LearnReact</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navbar__list-item">
                        <Link to="/overview"> Overview</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
