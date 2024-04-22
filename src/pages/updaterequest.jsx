import React, {useState, useEffect } from "react";
import UpdateForm from "../component/updateform";
import NavBar from "../component/navbar";
import style from '../css/addrequest.module.css';
import { useParams } from "react-router-dom";
function UpdateRequest(){
    let {id}=useParams()
     const [list,setList]=useState([]);
    
    function fetchData(){
        const token=localStorage.getItem("token");
        fetch(`https://localhost:7054/api/Requests/GetById?id=${id}`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json",
                "Accept":"application/json",
                "Authorization":`${token}`
            }            
        }).then(res=>res.json()).then(data=>{
            if(data){
             setList(data);
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
        
        <UpdateForm list={list}></UpdateForm>
      </div>
    </div>
    
}
export default UpdateRequest;