import React from 'react';
import "./Post.sass";
import {Link} from "react-router-dom";

const Post = props => {
    return (
        <div className="post-content">
            <span className="post__author">
                <Link to={"/people/" + props.user.id} className="post__link">
                    {"@" + props.user.username.toLowerCase() + ":"}
                </Link>
            </span>
            <span className="post__title">{" " + props.post.title}</span>
            <span className="post__text">{props.post.body}</span>
        </div>
    );
}

export default Post;