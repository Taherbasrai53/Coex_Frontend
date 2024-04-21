import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import CoexLogo from "../resources/coex-logo (1).png";
import styles from '../css/style.module.css';
import { Navigate } from "react-router-dom";
function NavBar() {
    const navigate =useNavigate();
    function Logout(){
        localStorage.removeItem('token');
        navigate("/");

    }
    return (
        <div className={styles.NavbarContainer}>
            <div className={styles.LeftNav}>
               <Link to = "/home"> <img id="coexlogo" src={CoexLogo} alt="Logo" /></Link>
            </div>

            <div className={styles.RightNav}>
                <div className={styles.sep}>
                    {/* <Link to="/allsiding" className={styles.nt} >Siding List</Link> */}
                    <Link to="/myprofile" className={styles.nt} >Profile </Link>
                    <Link to="/request" className={styles.nt}>Request</Link>
                    <Link  className={styles.nt} onClick={Logout}>Logout</Link>

                    
                </div>


            </div>
        </div>
    );
}

export default NavBar;
