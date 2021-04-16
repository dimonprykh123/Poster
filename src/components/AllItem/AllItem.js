import React from "react"
import styles from "./AllItem.module.scss"
const AllItem = ({data}) => {


    return (
        <div className={styles.container}>
            <p>Title: {data.title}</p>
            <p>Post: {data.body}</p>
        </div>
    )
}

export default AllItem