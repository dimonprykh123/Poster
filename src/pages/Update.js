import React from "react"
import CustomForm from "../components/CustomForm/CustomForm";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";
import {createFormValidation} from "../utils/validation";
import getPostmanAPI from "../APis/getPostmanAPI";
import {useHistory, useParams, useLocation} from "react-router-dom"
import {actionGetAllPost} from "../redux/actions/mainActions";
import {useDispatch} from "react-redux";


const Update = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const {updatePost, getAllPosts} = getPostmanAPI()

    return (
        <div className={"w-100 d-flex justify-content-center align-items-center"}>
            <CustomForm formName="Update form" submitFunction={(val) => {
                updatePost(id, val)
                    .then(() => actionGetAllPost(dispatch)(getAllPosts))
                    .then(() => history.push("/main"))

            }}
                        formValidator={createFormValidation} formState={state}>
                <CustomInput type="text" name="title"/>
                <CustomTextarea name="body"/>
            </CustomForm>
        </div>
    )
}

export default Update