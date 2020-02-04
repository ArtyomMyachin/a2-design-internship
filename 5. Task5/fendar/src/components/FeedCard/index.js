import React, {useState} from 'react';
import "./FeedCard.sass";
import {Link} from "react-router-dom";
import Post from "./Post";
import PostModal from "../../containers/PostModal";
import {applyMiddleware as dispatch} from "redux";
import {fetchCommentsByPostId, savePost, toggleModal} from "../../actions";
import {connect} from "react-redux";

const FeedCard = props => {
    return (
        <article className="post">
            <button className="post__button" onClick={ () => {
                props.toggleModal(true);
                console.log("after toggle with postId = " + props.post.id);
                // props.savePost(props.post);
                props.fetchCommentsByPostId(props.post.id);
            }}>
                <Post key={props.key} post={props.post} user={props.user}/>
            </button>
        </article>
    );
}

export const mapDispatchToProps = {
    toggleModal: toggleModal,
    fetchCommentsByPostId: fetchCommentsByPostId
    // savePost: savePost
}

export default connect(null, mapDispatchToProps)(FeedCard);
// export default FeedCard;