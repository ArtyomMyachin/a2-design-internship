import React, {useState} from 'react';
import "./FeedCard.sass";
import Post from "./../../components/Post";
import {fetchCommentsByPostId, savePost, toggleModal} from "../../actions";
import {connect} from "react-redux";

const FeedCard = props => {
    return (
        <article className="post">
            <button className="post__button" onClick={ () => {
                props.toggleModal(true);
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
}

export default connect(null, mapDispatchToProps)(FeedCard);