import {DEL_POST, SET_ALL_POSTS_DATA, SET_ALL_POSTS_LOADING, SET_COMMENTS} from "../types/mainTypes";

const setMainLoading = (val) => {
    return {
        type: SET_ALL_POSTS_LOADING,
        payload: val
    }
}

const setMainData = (data) => {
    return {
        type: SET_ALL_POSTS_DATA,
        payload: data
    }
}

const delPost = (id) => {
    return {
        type: DEL_POST,
        payload: id
    }
}

const setComments = (data) => {
    return {
        type: SET_COMMENTS,
        payload: data
    }
}

export const actionGetAllPost = (dispatch) => (service) => {
    dispatch(setMainLoading(true))
    dispatch(setMainData([]))
    service()
        .then(body => {
            console.log(body)
            dispatch(setMainData(body))
            dispatch(setMainLoading(false))
        })
}

export const actionDeletePost = (dispatch) => (id, service) => {
    service(id).then((body) => {
        dispatch(delPost(id))
    })
}

export const actionGetComments = (dispatch) => (service) => {

    service()
        .then(body => {
            console.log(body)
            dispatch(setComments(body.comments))
        })
}