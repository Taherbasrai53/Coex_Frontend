import React from "react";
import NavBar from "../component/navbar";
import styles from '../css/style.module.css';
import emblem from '../resources/Ministry.png';
import bgimg from '../resources/train.jpeg.jpg';
import htw from '../resources/htw.png';
import Contact from "../component/contact";
function HomePage(){
    return <div className={styles.ProfilePage}>
          
<NavBar></NavBar>
<div>
            <div className={styles.box}></div>
            <img src={emblem} className={styles.ministryimg} ></img>
            <h1 className={styles.text}>MINISTRY OF COAL</h1>
            <p className={styles.paragraph}>Forecasting and scheduling of railway rakes.</p>
            <p className={styles.box1}> COeX is a cutting-edge application designed to streamline the forecasting and scheduling process of railway rakes for coal extraction and delivery.
The system facilitates seamless communication between coal mine operatives and siding operators through a user-friendly interface.
The platform's design anticipates broader applications beyond its initial focus on coal, fostering a general-purpose website for diverse operational needs.
In essence, COeX emerges as a robust and adaptable application, revolutionizing the coordination between coal mine operatives and siding operators while laying the groundwork for future collaborative possibilities across different industries.
</p>
        </div>
        <div className={styles.work}>
        <h1>
    How Things Work
        </h1>
<img src={htw} ></img>
    </div>
    <Contact></Contact>
    </div>
}
export default HomePage;
