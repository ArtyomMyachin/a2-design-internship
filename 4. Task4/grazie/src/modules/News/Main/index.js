import React from "react";
import {Link} from "react-router-dom";
import "./Main.sass";
import back from "./../../../images/back.png";
import news from "./../news.json";
import Card from "./../Card";

const Main = () => {
    return (
        <div className="news-main">
            <div className="container">
                <div className="news-main-wrap">
                    <div className="news-main__back">
                        <Link to="/" className="news-main__button">
                            <img src={back} alt="Home"/>
                        </Link>
                        <div className="news-main__title-wrap">
                            <h2 className="news-main__title">
                                Most recent news  from our users
                            </h2>
                        </div>
                    </div>
                    <div className="news-main__news">
                        {news.map( newsItem => (<Card item={newsItem}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;