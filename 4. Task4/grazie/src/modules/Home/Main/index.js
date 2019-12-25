import React from "react";
import {Link} from "react-router-dom";
import "./Main.sass";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main-wrap">
                    <div className="main__content">
                        <h2 className="main__title">The perfect news community  made for everyone.</h2>
                        <Link to="/news" className="main__button">See what’s new</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;