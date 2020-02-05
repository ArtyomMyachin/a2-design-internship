import React from 'react';
import {Link} from "react-router-dom";
import './Header.sass';
import logo from "./../../assets/images/logo.svg";

const Header = props => {

    let classNames = require('classnames');
    let isCurrent = props.isCurrent === undefined ? [false*3] : props.isCurrent;

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    {/*<img src={logo} alt="Logo" className="header__logo"/>*/}
                    <span className="header__logo">f</span>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className={classNames("header__nav-item", {"current-page": isCurrent[0]})}>
                                <Link to="/" className="header__nav-link">home</Link>
                            </li>
                            <li className={classNames("header__nav-item", {"current-page": isCurrent[1]})}>
                                <Link to="/people" className="header__nav-link">people</Link>
                            </li>
                            <li className={classNames("header__nav-item", {"current-page": isCurrent[2]})}>
                                <Link to="/feed" className="header__nav-link">feed</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;