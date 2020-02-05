import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAllPosts, fetchAllUsers} from "../../actions";
import ProfileCard from "../../components/ProfileCard";

const Profile = props => {

    useEffect( () => {
        props.fetchAllPosts();
        props.fetchAllUsers();
    }, [] );

    return (
        <div className="profile">
            {props.users[props.id - 1] !== undefined ? <ProfileCard user={props.users[props.id - 1]} posts={props.posts}/> : ""}
        </div>
    );
}

const mapDispatchToProps = {
    fetchAllPosts: fetchAllPosts,
    fetchAllUsers: fetchAllUsers
}

const mapStateToProps = state => {
    return {
        posts: state.posts.postList,
        users: state.users.userList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);