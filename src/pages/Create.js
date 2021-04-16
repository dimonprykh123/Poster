import React from "react"
import CustomForm from "../components/CustomForm/CustomForm";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";
import {createFormValidation} from "../utils/validation";
import getPostmanAPI from "../APis/getPostmanAPI";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux";
import {actionGetAllPost} from "../redux/actions/mainActions";

const Create = () => {

    const history = useHistory()
    const {createPost, getAllPosts} = getPostmanAPI()
    const dispatch = useDispatch()
    const createFormState = {
        title: "",
        body: ""
    }

    return (
        <div className={"w-100 d-flex justify-content-center align-items-center"}>
            <CustomForm formName="Create post"
                        submitFunction={(val) => {
                            createPost(val)
                                .then(() => actionGetAllPost(dispatch)(getAllPosts))
                            history.push("/main")

                        }}
                        formValidator={createFormValidation}
                        formState={createFormState}>
                <CustomInput type="text" name="title"/>
                <CustomTextarea name="body"/>
            </CustomForm>
        </div>
    )
}

export default Create