import React, { useState } from 'react';
import NavBar from '../component/navbar';
import style from '../css/addrequest.module.css';
import RequestForm from '../component/requestForm';



function AddRequest() {
    
  
    return (
      <div>
  <NavBar></NavBar>
  
  
      <div className={style.App}>
        <h1 className={style.h1}> Request System</h1>
        
        <RequestForm></RequestForm>
  
      </div>
    </div>
    );
  }

  export default AddRequest;