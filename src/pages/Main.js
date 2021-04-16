import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllPost} from "../redux/actions/mainActions";
import getPostmanAPI from "../APis/getPostmanAPI";
import Loader from "../components/loader/Loader";
import PostList from "../components/PostsList/PostsList";

const Main = () => {

    const {getAllPosts} = getPostmanAPI()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.main.loading)
    const posts = useSelector(state => state.main.posts)

    useEffect(() => {
        actionGetAllPost(dispatch)(getAllPosts)
    }, [])

    if (loading) {
        return (
            <div className="w-100  d-flex justify-content-center align-items-center">
                <Loader/>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className="w-100  d-flex justify-content-center align-items-center">
                Create some posts!
            </div>
        )
    }
    return (
        <PostList data={posts}/>
    )
}

export default Main