import {ADD_COMMENTS, DEL_POST, SET_ALL_POSTS_DATA, SET_ALL_POSTS_LOADING, SET_COMMENTS} from "../types/mainTypes";
import {deleteSomeData} from "../../utils/reuserFunctions";

const initialState = {
    posts: [],
    loading: false,
    comments:[]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS_DATA:
            return {...state, posts: action.payload}
        case SET_ALL_POSTS_LOADING:
            return {...state, loading: action.payload}
        case DEL_POST:
            return deleteSomeData(state, action.payload)
        case SET_COMMENTS:
            return {...state,comments: action.payload}
        case ADD_COMMENTS:
        default:
            return state
    }
}

export default mainReducer