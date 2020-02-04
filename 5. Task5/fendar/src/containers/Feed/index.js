import React, {useEffect} from 'react';
import {connect} from "react-redux";
import FeedCard from "../../components/FeedCard";
import {fetchAllPosts, fetchAllUsers, fetchPostsByUserId, toggleModal} from "../../actions";

const Feed = props => {

    useEffect( () => {
        console.log("id in feed:" + props.id);
        if(props.id === undefined) {
            console.log("when undef");
            props.fetchAllPosts();
        } else {
            console.log("when id = " + props.id);
            props.fetchPostsByUserId(props.id);
        }
        props.fetchAllUsers();
    }, [] );

    return (
        <div className="feed">
            {props.users.length === 0 ? "" : props.posts.sort(
                () => 0.5 - Math.random()
            ).map( (post, index) => (<FeedCard key={index} post={post} user={props.users.find(
                user => user.id === post.userId
            )} />) )}
        </div>
    );
}

const mapDispatchToProps = {
    fetchAllPosts: fetchAllPosts,
    fetchAllUsers: fetchAllUsers,
    fetchPostsByUserId: fetchPostsByUserId,
    toggleModal: toggleModal
}

const mapStateToProps = state => {
    return {
        posts: state.posts.postList,
        users: state.users.userList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);