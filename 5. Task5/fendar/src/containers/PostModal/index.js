import React, {useEffect} from "react";
import ProfileCard from "../../components/ProfileCard";
import {fetchAllPosts, fetchAllUsers, fetchCommentsByPostId, toggleModal} from "../../actions";
import {connect} from "react-redux";
import Post from "../../components/FeedCard/Post";
import Comment from "../../components/Comment";
import "./PostModal.sass";

const PostModal = props => {

    // useEffect( () => {
    //     props.fetchCommentsByPostId(props.currentPost.id);
    // }, [] );

    let currentPost = props.comments.length !== 0 ? props.posts.find( e => e.id === props.comments[0].postId ) : undefined;

    return (
        <div className="post-modal-wrap">
            {(!props.modalIsVisible) || (currentPost === undefined) ? "" :
            <div className="post-modal" onClick={ () => props.toggleModal(false) }>
                <article className="post-modal__content">
                    <Post post={currentPost} user={props.users.find(
                        e => e.id === currentPost.userId
                    )}/>
                    <div className="post-modal__comments">
                        {props.comments.map( (comment, index) => <Comment key={index} comment={comment}/> )}
                    </div>
                </article>
            </div>}
        </div>
    );
};

const mapDispatchToProps = {
    fetchCommentsByPostId: fetchCommentsByPostId,
    toggleModal: toggleModal
}

const mapStateToProps = state => {
    return {
        comments: state.comments.commentList,
        users: state.users.userList,
        posts: state.posts.postList,
        modalIsVisible: state.modal.modalIsVisible
        // currentPost: state.posts.currentPost
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);