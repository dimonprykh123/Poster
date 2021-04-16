import React from "react"
import styles from "./CustomInput.module.scss"
import {BsExclamationTriangle} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";

const CustomInput = ({name, type, props, idx}) => {
    return (
        <div className={styles.inputBox} key={idx}>
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[name]}
                name={name}
                id={name}
            />
            {props.touched[name] && props.errors[name] &&
            <div className={"redTxtColor"} id="feedback"><span className={"redTxtColor"}><BsExclamationTriangle/></span> {props.errors[name]}</div>}

            {props.touched[name] && !props.errors[name] &&
            <div className={"greenTxtColor"}><span className={"greenTxtColor"}><AiOutlineCheck/> </span>Success</div>}
        </div>
    )
}

export default CustomInput
