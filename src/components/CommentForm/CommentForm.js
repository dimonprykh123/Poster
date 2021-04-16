import React from "react"
import styles from "./CommentForm.module.scss"
import CustomForm from "../CustomForm/CustomForm";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import {commentFormValidation} from "../../utils/validation";
import getPostmanAPI from "../../APis/getPostmanAPI";
import {actionGetComments} from "../../redux/actions/mainActions";
import {useDispatch} from "react-redux";

const CommentForm = ({id}) => {

    const {createComment, getPostComment} = getPostmanAPI()
    const dispatch = useDispatch()
    const formState = {
        comment: ""
    }

    return (
        <CustomForm formState={formState}
                    formValidator={commentFormValidation}
                    formName={""}
                    submitFunction={(val, resetForm) => {
                        id = Number(id)
                        const obj = {
                            postId: id,
                            body: val.comment
                        }
                        createComment(obj)
                            .then(() => actionGetComments(dispatch)(() => getPostComment(id)))
                        resetForm()
                    }}>
            <CustomTextarea name="comment"/>
        </CustomForm>
    )
}

export default CommentForm