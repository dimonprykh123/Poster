import React, {useState, useEffect} from "react"
import {BsList} from "react-icons/bs";
import {BsPencilSquare} from "react-icons/bs";

import {NavLink} from "react-router-dom";
import styles from "./MobileDropdown.module.scss"

const MobileDropdown = ({isAuth}) => {

    const [display, setDisplay] = useState(false)

    const btnHandler = () => {
        setDisplay(!display)
    }

    const dropdownStatus = (e) => {
        if (!e.target.closest(".customDropdown")) {
            setDisplay(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", dropdownStatus)

        return () => document.removeEventListener("click", dropdownStatus)
    }, [])


    return (
        <div className={`${styles.customDropdown} customDropdown`}>
            <button onClick={btnHandler}><BsList size={"2em"}/></button>
            {display &&
            <ul>
                <li><NavLink to="/create">Create <BsPencilSquare/></NavLink></li>
            </ul>
            }

        </div>
    )
}

export default MobileDropdown