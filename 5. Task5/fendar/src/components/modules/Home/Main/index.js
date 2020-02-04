import React from "react";
import "./Main.sass";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main-wrap">
                    <div className="main__content">
                        <div className="main__logo">f</div>
                        <h1 className="main__title">fendar.io</h1>
                        <div className="main__text">help people get to know each other!</div>
                        <button className="main__button">start now</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;