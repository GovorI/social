const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: "Hi, How are you?", likes: 15},
        {id: 2, message: "This is my first post!", likes: 20}
    ],
    newPostText: '',
    profile: null
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length > 0 ? state.posts[state.posts.length - 1].id + 1 : 1,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        // state.posts.push(newPost)
        // state.newPostText = ''
        // return state;

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        // state.newPostText = action.newPostText
        // return state;
        default:
            return state;
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
}

export function changePostTextActionCreator(newPostText) {
    return {type: UPDATE_POST_TEXT, newPostText}
}

export function setUserProfile(profile) {
    return {type: SET_USER_PROFILE, profile}
}
