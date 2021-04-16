import React from "react"
import PostItem from "../PostItem/PostItem";

const PostList = ({data}) => {

    return (
        <div>
            {
                data.map(el => {
                    return (
                        <div key={el.id}>
                        <PostItem el={el}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList