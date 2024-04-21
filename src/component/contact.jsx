import React from "react";
import logo from '../resources/contact-logo.png';
import style from '../css/style.module.css';
import { Link } from "react-router-dom";


function Contact(){
    return <div className={style.contact}>
<div className={style.leftcon}>
<img src={logo}></img>
</div>
<div className={style.rightcon}>
    <Link to="/servicetable" className={style.ct}>Services</Link>
    <Link to="/support" className={style.ct}>Support</Link>
    <Link to="/contactus" className={style.ct}>contact us</Link>
   
</div>
    </div>
}
export default Contact;