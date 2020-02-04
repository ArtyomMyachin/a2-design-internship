import React from 'react';
import Header from './../../Header';
import Main from './Main';
import PostModal from "../../../containers/PostModal";

const Feed = () => {
    return (
        <div className="feed">
            <Header/>
            <Main/>
            <PostModal/>
        </div>
    );
}

export default Feed;