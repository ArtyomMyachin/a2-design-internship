import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Main.sass";
import back from "./../../../images/back.png";
import news from "./../news.json";
import Card from "./../Card";

const Main = () => {

    const [newsType, setNewsType] = useState("all");

    return (
        <main className="news-main">
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
                    <div className="news-main__filters">
                        <button className="news-main__filter" onClick={() => setNewsType("all")}>All news</button>
                        <button className="news-main__filter" onClick={() => setNewsType("global")}>Global</button>
                        <button className="news-main__filter" onClick={() => setNewsType("politics")}>Politics</button>
                        <button className="news-main__filter" onClick={() => setNewsType("art")}>Art</button>
                    </div>
                    <div className="news-main__news">
                        {
                            newsType === "all" ? news.map( (newsItem, index) => <Card key={index} item={newsItem}/> )
                                : news.filter( item => item.type === newsType ).map( (item, index) => <Card key={index} item={item}/>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;