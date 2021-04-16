import React from "react"
import styles from "./CustomTextarea.module.scss"
import {BsExclamationTriangle} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";

const CustomTextarea = ({name, props, idx}) => {
    return (
        <div className={styles.areaBox} key={idx}>
            <label htmlFor={name}>{name}</label>
            <textarea
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[name]}
                name={name}
                id={name}
            />
            {props.touched[name] && props.errors[name] &&
            <div className={"redTxtColor"} id="feedback"><span
                className={"redTxtColor"}><BsExclamationTriangle/></span> {props.errors[name]}</div>}

            {props.touched[name] && !props.errors[name] &&
            <div className={"greenTxtColor"}><span className={"greenTxtColor"}><AiOutlineCheck/> </span>Success</div>}
        </div>
    )
}

export default CustomTextarea