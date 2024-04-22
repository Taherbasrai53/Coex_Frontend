import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import style from '../css/addrequest.module.css';
import { useParams } from "react-router-dom";

function UpdateForm(props) {
  
  let {id}= useParams();
  const navigate = useNavigate();
  const [FrieghtAmount, setAmount] = useState('');
  const [RakesRequired, setCoalAmount] = useState('');
  const [RequiredOn, setDateTime] = useState('');
  const [Remarks, setRemark] = useState('');
  const [Reason, setReason] = useState('');


  function UpdateData(e){
    e.preventDefault()

    const token=localStorage.getItem("token");
    fetch(`https://localhost:7054/api/Requests/UpdateRequest`,{
        method:"PUT",
        headers:{
            'Content-Type':"application/json",
            "Accept":"application/json",
            "Authorization":`${token}`
        },
        body:JSON.stringify({id,FrieghtAmount,RakesRequired,RequiredOn,Remarks,Reason}),
    }).then(res=>res.json()).then(data=>{
        if(data.success){
          
        }
    }).catch(err=>{
        console.log(err);
    })
}

const formatDateForInput = (dateString) => {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, '0');
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

  console.log(typeof props.list.requiredOn)
  return (
    <div className={style.body1}>
      <form className={style.form1}  >
        <label>
          Number of Rakes:
          <input
            type="number"    
            placeholder={props.list.rakesRequired}        
            onChange={(e) => setCoalAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Coal Stock (in tons):
          <input
            className={style.form1}
            placeholder={props.list.frieghtAmount}
            type="number"           
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Requested Date and Time:
          <input
            className={style.form1}
            placeholder={formatDateForInput(props.list.requiredOn)}
            type="datetime-local"           
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <label>
          Remark:
          <input
            className={style.form1}
            placeholder={props.list.remarks}
            type="text"            
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </label>
        <label>
          Reason:
          <input
            className={style.form1}            
            type="text"            
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>

        <button type="submit" onClick={UpdateData}>Submit Request</button>
      </form>
    </div>
  );
}

export default UpdateForm;