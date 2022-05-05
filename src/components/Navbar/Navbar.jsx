import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar--default">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Link to="">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <ul className="navbar navbar__list">
                        {/* <li className="navbar__list-item">
                        <Link to="">LearnReact</Link>
                    </li> */}
                        <li className="navbar__list-item">
                            <Link to="/memo">Memoisation</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/overview"> Overview</Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link to="/products"> Products</Link>
                        </li>
                        {/* <li className="navbar__list-item">
                            <Link to="/customHook"> CustomHook</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
            {/* <div id="nav">
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="#">Menu 1</a>
                        <ul>
                            <li>
                                <a href="#">Link 1</a>
                            </li>
                            <li>
                                <a href="#">Link 2</a>
                            </li>
                            <li>
                                <a href="#">Link 3</a>
                            </li>
                            <li>
                                <a href="#">Submenu</a>
                                <ul>
                                    <li>
                                        <a href="#">Link1</a>
                                    </li>
                                    <li>
                                        <a href="#">Link2</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Menu 2</a>
                        <ul>
                            <li>
                                <a href="#">Link1</a>
                            </li>
                            <li>
                                <a href="#">Submenu1</a>
                                <ul>
                                    <li>
                                        <a href="#">Link1</a>
                                    </li>
                                    <li>
                                        <a href="#">Link2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Link2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                </ul>
            </div> */}
        </>
    );
};

export default Navbar;
