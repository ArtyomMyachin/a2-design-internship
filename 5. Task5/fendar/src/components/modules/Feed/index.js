import React from 'react';
import Header from './../../Header';
import Main from './Main';
import PostModal from "../../../containers/PostModal";

const Feed = () => {

    const isCurrent = [false, false, true];

    return (
        <div className="feed">
            <Header isCurrent={isCurrent}/>
            <Main/>
            <PostModal/>
        </div>
    );
}

export default Feed;