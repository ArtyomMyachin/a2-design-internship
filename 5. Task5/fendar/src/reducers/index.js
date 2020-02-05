import {getRandomColor} from "../helpers";

const initialState = {
    userList: [],
    postList: [],
    commentList: [],
    modalIsVisible: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            let users = action.payload;
            if(state.userList.length === 0) {
                users.forEach( e => {
                    e.color = getRandomColor();
                });
            } else {
                users.forEach( (e, i) => {
                    e.color = state.userList[i].color;
                } );
            }
            return {...state, userList: users};
        default:
            return state;
    }
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_POSTS":
            return {...state, postList: action.payload};
        default:
            return state;
    }
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COMMENTS":
            return {...state, commentList: action.payload};
        default:
            return state;
    }
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return {...state, modalIsVisible: action.payload};
        default:
            return state;
    }
}