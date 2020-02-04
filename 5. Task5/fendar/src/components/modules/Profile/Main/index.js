import React from 'react';
import "./Profile.sass";
import Profile from "../../../../containers/Profile";
import Feed from "../../../../containers/Feed";

const Main = props => {
    return (
        <div className="profile-page">
            <div className="container">
                <div className="profile-wrap">
                    <Profile id={props.id}/>
                    <div className="feed-wrap">
                        <h2 className="feed__title">latest posts</h2>
                        <Feed id={props.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;