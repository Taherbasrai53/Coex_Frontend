import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css';

function AdminLogin() {
  const [userName, setId] = useState("");
  const [password, setPassword] = useState("");

  // const [passcode, setPasscode] = useState("");
  const navigate = useNavigate();



 function submit(event){
    event.preventDefault();
    // var data = new FormData();
    // data.append("sidingId",sidingId);
    fetch('https://localhost:7054/api/User/AdminLogin', {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>res.json()).then((data)=>{
      console.log(data);
       if(data.success){ 
      const token = data.token;
      
      localStorage.setItem('token',"Bearer "+ token);
      
      navigate("/");

       }else{
        alert("wrong password");
       }
      
        
    })}
 
  return (
    <div className={styles.Body}>
      <div className={styles.wrapper}>
        <form onSubmit={submit}>
          <h1>Admin Login</h1>
          
          {/* <div className={styles.inputbox}>
            <input onChange={(e) => setPasscode(e.target.value)} type="text" placeholder="Passcode" required />
            <i className="bx bxsuser"></i>
          </div> */}
          <div className={styles.inputbox}>
            <input onChange={(e) => setId(e.target.value)} type="text" placeholder="Manager ID" required />
            <i className="bx bxsuser"></i>
          </div>
          <div className={styles.inputbox}>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <i className={styles.bxbxslockalt}></i>
          </div>
          <div className={styles.rememberforgot}>
            <label>
              <input type="checkbox" />Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className={styles.registerlink}>
            <p>
            <Link to='/'>login as siding</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
