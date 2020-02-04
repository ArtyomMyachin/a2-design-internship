import React from 'react';
import Header from './../../Header';
import Main from './Main';
import PostModal from "../../../containers/PostModal";

const Profile = props => {
    const id = props.match.params.id;
    return (
        <div className="profile">
            <Header/>
            <Main id={id}/>
            <PostModal/>
        </div>
    );
}

export default Profile;