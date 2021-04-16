import React from "react"
import {BsTrash} from "react-icons/bs";
import {BsPencil} from "react-icons/bs";
import styles from "./PostItem.module.scss"
import {actionDeletePost} from "../../redux/actions/mainActions";
import {useDispatch} from "react-redux";
import getPostmanAPI from "../../APis/getPostmanAPI";
import {useHistory} from "react-router-dom"

const PostItem = ({el}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const {deletePost} = getPostmanAPI()

    return (
        <div className={styles.container}>
            <p className={"mb-0 "}>{el.title}</p>
            <p className={"mb-0 second"}>{el.body}</p>
            <div className={"btn-group"}>

                <button className={"lightRedBackColor redTxtColor btn"}
                        onClick={() => actionDeletePost(dispatch)(el.id, deletePost)}>
                    <BsTrash/>
                </button>

                <button className={"lightBlueBackColor purpleBlueColor btn"}
                        onClick={() => history.push({
                            pathname: `/update/${el.id}`,
                            state: {
                                title: el.title,
                                body: el.body
                            }
                        })}>
                    <BsPencil/>
                </button>

                <button className={"lightGreenBackColor greenTxtColor btn"}
                        onClick={() => history.push({
                            pathname: `/post/${el.id}`,
                            state: {
                                id: el.id,
                                title: el.title,
                                body: el.body
                            }
                        })}>
                    Detail
                </button>
            </div>
        </div>
    )
}

export default PostItem