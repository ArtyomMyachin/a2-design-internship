import React from "react";
import "./Comment.sass";

const Comment = props => {
    return (
        <div className="comment">
            <span className="comment__user">{props.comment.email.toLowerCase() + ": "}</span>
            <span className="comment__title">{props.comment.name}</span>
            <span className="comment__text">{props.comment.body}</span>
        </div>
    );
}

export default Comment;