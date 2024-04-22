import React, {useState, useEffect } from "react";
import UpdateForm from "../component/updateform";
import NavBar from "../component/navbar";
import style from '../css/addrequest.module.css';
import { useParams } from "react-router-dom";
function UpdateRequest(){
    let {id}=useParams()
    // const [list,setList]=useState([]);
    
    function fetchData(){
        const token=localStorage.getItem("token");
        fetch("",{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                "Accept":"application/json",
                "Authorization":`${token}`
            },
            body:JSON.stringify({id}),
        }).then(res=>res.json()).then(data=>{
            if(data.success){
// setList(data.list);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        fetchData();
            },[]);
return <div>
     
  <NavBar></NavBar>
  
  
      <div className={style.App}>
        <h1 className={style.h1}> Request System</h1>
        
        <UpdateForm ></UpdateForm>
      </div>
    </div>
    
}
export default UpdateRequest;