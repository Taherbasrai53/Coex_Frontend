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
    fetch("https://localhost:7054/api/Sidings/UpdateInventory",{
        method:"PUT",
        headers:{
            'content-type':"application/json",
            "Accept":"application/json",
            "Authorization":`${token}`
        },
        body:JSON.stringify({"Inventory": inventory})
    }).then(res=>res.json).then((data)=>{
        if(data.success){
            setSiding(data.siding);
            localStorage.setItem('siding',data.siding);
        }
    }).catch(err=>{
        console.log(err);
    })
}



return <div className={styles.ProfilePage}>

<NavBar></NavBar>
<div className={styles.details}>
    <h1>Profile </h1>
<h3>Siding code: {siding.sidingCode}</h3>
<h3>Siding name: {siding.name}</h3>
<h3>Division: {siding.division}</h3>
<h3>Station: {siding.station}</h3>
<h3>Number of Mines: {siding.numMines}</h3>
<label>Inventory: </label>
<input placeholder={siding.inventory} onChange={(e)=>{setInventory(e.target.value)}}></input>
<h3>Zone: {siding.zone}</h3>
<button onClick={submit}>Submit</button>
    </div>

</div>
}
export default ProfilePage;