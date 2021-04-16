import React from "react"
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss"
import {BsPencilSquare} from "react-icons/bs";
import MobileDropdown from "../MobileDropdown/MobileDropdown";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1><NavLink to="/main">Posts-Creator</NavLink></h1>
            <div>
                <MobileDropdown/>
            </div>
            <ul className={"mb-0"}>
                <li>
                    <NavLink to="/create">Create <BsPencilSquare/></NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header