import React, {useEffect, useState} from "react"
import {useHistory, useParams, useLocation} from "react-router-dom"
import AllItem from "../components/AllItem/AllItem";
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import getPostmanAPI from "../APis/getPostmanAPI";
import {actionGetComments} from "../redux/actions/mainActions";
import {useDispatch, useSelector} from "react-redux";
import {BsFillChatFill} from "react-icons/bs";

const Post = () => {

    const {getPostComment} = getPostmanAPI()
    const dispatch = useDispatch()
    const comments = useSelector(state=>state.main.comments)
    const {state} = useLocation()
    const {id} = useParams()
    const [hide, setHide] = useState(true)
    const hideHandler = (val) => {
        setHide(!val)
    }

    useEffect(() => {
        actionGetComments(dispatch)(()=>getPostComment(id))
    }, [])

    return (
        <>
            <AllItem data={state}/>
            <h4 className={"d-flex align-items-center justify-content-center mt-3"}>Comments &nbsp;<BsFillChatFill/></h4>
            <hr/>
            <CommentForm id={id}/>
            <CommentList hide={hide} show={hideHandler} data={comments}/>
        </>
    )
}

export default Post