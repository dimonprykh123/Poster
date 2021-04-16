import React from "react"
import styles from "./Comment.module.scss"

const Comment = ({el}) => {
    return (
        <div className={styles.mainContainer}>
            <div><span>Some user:</span> {el.body}</div>
        </div>
    )
}

export default Comment