import React from 'react';
import Header from './../../Header';
import Main from './Main';
import PostModal from "../../../containers/PostModal";

const Profile = props => {

    const id = props.match.params.id;
    const isCurrent = [false, true, false];

    return (
        <div className="profile">
            <Header isCurrent={isCurrent}/>
            <Main id={id}/>
            <PostModal/>
        </div>
    );
}

export default Profile;