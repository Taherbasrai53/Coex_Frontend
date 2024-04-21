import React from "react";
import { Link } from 'react-router-dom';
import CoexLogo from "../resources/coex-logo (1).png";
import styles from '../css/style.module.css';

function NavBar() {
    return (
        <div className={styles.NavbarContainer}>
            <div className={styles.LeftNav}>
               <Link to = "/#"> <img id="coexlogo" src={CoexLogo} alt="Logo" /></Link>
            </div>

            <div className={styles.RightNav}>
                <div className={styles.sep}>
                    {/* <Link to="/allsiding" className={styles.nt} >Siding List</Link> */}
                    <Link to="/myprofile" className={styles.nt} >Profile </Link>
                    <Link to="/req" className={styles.nt}>Request</Link>
                    <Link to="/login" className={styles.nt}>Login</Link>
                </div>


            </div>
        </div>
    );
}

export default NavBar;
