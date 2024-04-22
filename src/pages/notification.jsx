import React, { useState ,useEffect} from 'react';
import style from '../css/adminpage.module.css';
import NavBar from '../component/navbar';
const url="https://localhost:7278/api/Activities/GetAll";
const colour=[
    {
        type1:'#ff9999',
    },
    {
        type2:'#ffff99',
    },
    {
        type3:'#b3ffb3',
    }
]
const Notifications = () => {
  // Placeholder for requestsData
 


  
  const [requests, setRequests] = useState([]);
//   function fetchData(api){
//     const token=localStorage.getItem('token');
// fetch(api,{
//     method:"GET",
//     crossDomain:true,
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `${token}`,
//       },
// }).then((res)=>{res.json()}).then((data)=>{
//     console.log(data);
// setRequests(data);
// })
//   }
const fetchData = (api) => {
    const token = localStorage.getItem('token');
    fetch(api, {
      method: "GET",
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
    })
    .then((res) => res.json())  // Return the Promise here
    .then((data) => {
      console.log(data);
      setRequests(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle the error appropriately (e.g., set an error state)
    }); 
  };
  
  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div className={style.Notification}>
        <NavBar></NavBar>
      <h1>Notification</h1>
      <table>
        <thead>
          <tr className={style['request-type' + requests.type]}>
          
            <th>S.No</th>
            <th>Siding ID</th>
            <th>Title</th>
            <th>Reasoning</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((item,idx) => ( 
            <tr key={idx} style={{backgroundColor:item.colorCode}}>
            <td>{item.id}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;