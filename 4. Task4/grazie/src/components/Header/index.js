import React from 'react';
import logo from "./../../images/logo.png";
import "./Header.sass";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-wrap">
                    <h1 className="header__title">Grazie!</h1>
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </div>
    );
};

export default Header;