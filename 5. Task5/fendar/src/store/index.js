import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {commentReducer, modalReducer, postReducer, userReducer} from "../reducers";

export const store = createStore(combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    modal: modalReducer
}), applyMiddleware(thunk));