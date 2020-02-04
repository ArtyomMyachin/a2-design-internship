import React from "react";
import "./Main.sass";
import Feed from "../../../../containers/Feed";

const Main = () => {
    return (
        <main className="main-feed">
            <div className="container">
                <div className="feed-wrap">
                    <h2 className="feed__title">latest posts</h2>
                    <Feed/>
                </div>
            </div>
        </main>
    );
};

export default Main;