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
setSiding(localStorage.getItem('siding'));
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
return <>
<img src={bgimg} className={styles.bgimg} ></img>
<NavBar></NavBar>
<div>
<h3>{siding.sidingCode}</h3>
<h3>{siding.name}</h3>
<h3>{siding.division}</h3>
<h3>{siding.station}</h3>
<h3>{siding.state}</h3>
<h3>{siding.nomines}</h3>
<input value={siding.inventory} onChange={(e)=>setInventory(e.target.value)}></input>
<h3>{siding.availablerake}</h3>
<button onClick={submit}>Submit</button>
    </div>

</>
}
export default ProfilePage;