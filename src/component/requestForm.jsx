import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import style from '../css/addrequest.module.css';


function RequestForm() {
  const navigate = useNavigate();
  const [FrieghtAmount, setAmount] = useState('');
  const [RakesRequired, setCoalAmount] = useState('');
  const [RequiredOn, setDateTime] = useState('');
  const [Remarks, setRemark] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');

    console.log({ FrieghtAmount, RakesRequired, RequiredOn,Remarks });
    fetch('https://localhost:7054/api/Requests/AddRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ FrieghtAmount, RakesRequired, RequiredOn, Remarks }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
         navigate("/request")
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }

  return (
    <div className={style.body1}>
      <form className={style.form1} onSubmit={handleSubmit}>
        <label>
          Number of Rakes:
          <input
            type="number"            
            onChange={(e) => setCoalAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Coal Stock (in tons):
          <input
            className={style.form1}
            type="number"           
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label>
          Requested Date and Time:
          <input
            className={style.form1}
            type="datetime-local"           
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <label>
          Remark:
          <input
            className={style.form1}
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

export default RequestForm;