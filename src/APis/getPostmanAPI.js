import axios from "axios"

const getPostmanAPI = () => {
    const _url = "https://bloggy-api.herokuapp.com/"

    const request = async (url, method, body = null) => {
        if (body) {
            body = JSON.stringify(body)
        }
        const response = await fetch(`${_url}${url}`, {
            method: method,
            headers: {"Content-Type":"application/json"},
            body: body
        })
        const responseBody = await response.json()

        return responseBody
    }

    const createPost = async (body) => {
        const response = await request("posts", "POST", body)
        return response
    }

    const getAllPosts = async () => {
        const response = await request("posts", "GET")
        return response
    }

    const getPostComment = async (id) => {
        const response = await request(`posts/${id}?_embed=comments`, "GET")
        return response
    }

    const updatePost = async (id, body) => {
        const response = await request(`posts/${id}`, "PUT", body)
        return response
    }

    const deletePost = async (id) => {
        const response = await request(`posts/${id}`, "DELETE")
        return response
    }

    const createComment = async (body) => {
        const response = await request("comments", "POST", body)
        return response
    }

    return {createPost, createComment, deletePost, updatePost, getAllPosts, getPostComment}

}

export default getPostmanAPI