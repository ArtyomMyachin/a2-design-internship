const initialState = {
    userList: [],
    postList: [],
    // currentPost: undefined,
    commentList: [],
    modalIsVisible: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            return {...state, userList: action.payload};
        default:
            return state;
    }
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_POSTS":
            return {...state, postList: action.payload};
        // case "SAVE_POST":
        //     return {...state, currentPost: action.payload};
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