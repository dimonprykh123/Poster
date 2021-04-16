import React from "react"
import Comment from "../Comment/Comment";

const CommentList = ({hide, data, show}) => {

    if (hide) {
        return (
            <div className={"text-center blueTxtColor customHover"} onClick={() => show(hide)}>Show comments</div>
        )
    }

    if (data.length === 0 && !hide) {
        return (
            <>
                <div className={"text-center"}> No comments!</div>
                <div className={"text-center blueTxtColor customHover"} onClick={() => show(hide)}>Hide comments</div>
            </>
        )
    }

    if (!hide && data.length > 0) {
        return (
            <>
                {
                    data.map(el  => {
                        return (
                            <div key={el.id}>
                                <Comment el={el}/>
                            </div>
                        )
                    })
                }
                <div className={"text-center blueTxtColor customHover"} onClick={() => show(hide)}>Hide comments</div>
            </>
        )
    }
}

export default CommentList