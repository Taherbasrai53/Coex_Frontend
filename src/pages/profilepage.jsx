import {React,useState} from "react";
import { useEffect } from "react";
import bgimg from '../resources/train.jpeg.jpg';
import NavBar from "../component/navbar";
import styles from '../css/style.module.css';

function ProfilePage(){
    const [siding,setSiding]=useState([]);
    const [token,setToken]=useState("");
    const [inventory,setInventory]=useState("");
useEffect(()=>{
setSiding(JSON.parse(localStorage.getItem('siding')));
setToken(localStorage.getItem('token'));
},[]);    
function submit(event){
    event.preventDefault();
    fetch("",{
        method:"UPDATE",
        headers:{
            'application-type':"application/json",
            "Accept":"application/json",
            "Authorization":`${token}`
        },
        body:JSON.stringify({inventory})
    }).then(res=>res.json).then((data)=>{
        if(data.success){
            setSiding(data.siding);
            localStorage.setItem('siding',data.siding);
        }
    }).catch(err=>{
        console.log(err);
    })
}
useEffect(()=>{},[]);
return <>
<img src={bgimg} className={styles.bgimg} ></img>
<NavBar></NavBar>
<div className={styles.details}>
    <h1>Profile </h1>
<h3>Siding code {}</h3>
<h3>Siding name {}</h3>
<h3>Division {}</h3>
<h3>Station {}</h3>
<h3>Number of Mines {}</h3>
<label>Inventory</label>
<input placeholder="" onChange={(e)=>{setInventory(e.target.value)}}></input>
<h3>Zone {}</h3>
<button onClick={submit}>Submit</button>
    </div>

</>
}
export default ProfilePage;