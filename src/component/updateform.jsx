import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import style from '../css/addrequest.module.css';


function UpdateForm(props) {
  const navigate = useNavigate();
  const [FrieghtAmount, setAmount] = useState('');
  const [RakesRequired, setCoalAmount] = useState('');
  const [RequiredOn, setDateTime] = useState('');
  const [Remarks, setRemark] = useState('');

  function UpdateData(){
    const token=localStorage.getItem("token");
    fetch("",{
        method:"PUT",
        headers:{
            'Content-Type':"application/json",
            "Accept":"application/json",
            "Authorization":`${token}`
        },
        body:JSON.stringify({FrieghtAmount,RakesRequired,RequiredOn,Remarks}),
    }).then(res=>res.json()).then(data=>{
        if(data.success){
setList(data.list);
        }
    }).catch(err=>{
        console.log(err);
    })
}

  return (
    <div className={style.body1}>
      <form className={style.form1} >
        <label>
          Number of Rakes:
          <input
            type="number"    
            placeholder={props.list.FrieghtAmount}        
            onChange={(e) => setCoalAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Coal Stock (in tons):
          <input
            className={style.form1}
            placeholder={props.list.RakesRequired}
            type="number"           
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Requested Date and Time:
          <input
            className={style.form1}
            placeholder={props.list.RequiredOn}
            type="datetime-local"           
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <label>
          Remark:
          <input
            className={style.form1}
            placeholder={props.list.Remarks}
            type="text"            
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default UpdateForm;