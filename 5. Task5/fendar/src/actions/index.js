import {getRandomColor} from "../helpers";

export const setAllUsers = users => {
    return {
        type: "FETCH_ALL_USERS",
        payload: users
    };
}

export const fetchAllUsers = () => async dispatch => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    dispatch(setAllUsers(users));
}

export const setAllPosts = posts => {
    return {
        type: "FETCH_ALL_POSTS",
        payload: posts
    };
}

export const fetchAllPosts = () => async dispatch => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    dispatch(setAllPosts(posts));
}

export const fetchPostsByUserId = id => async dispatch => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    let posts = await response.json();
    dispatch(setAllPosts(posts));
}

export const setComments = comments => {
    return {
        type: "FETCH_COMMENTS",
        payload: comments
    };
}

export const fetchCommentsByPostId = id => async dispatch => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    let comments = await response.json();
    dispatch(setComments(comments));
}

export const toggleModal = modalIsVisible => {
    console.log("in toggle with " + modalIsVisible);
    return {
        type: "TOGGLE_MODAL",
        payload: modalIsVisible
    };
}