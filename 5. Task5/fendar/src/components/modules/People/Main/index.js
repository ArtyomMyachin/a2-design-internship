import React from "react";
import "./Main.sass";
import Users from "../../../../containers/Users";

const Main = () => {
    return (
        <main className="main-people">
            <div className="container">
                <div className="people-wrap">
                    <h2 className="people__title">Top-picked authors:</h2>
                    <Users/>
                </div>
            </div>
        </main>
    );
};

export default Main;