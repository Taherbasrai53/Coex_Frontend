// SidingMap.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from '../css/allsiding.module.css';

const url = "https://localhost:7278/api/Sidings/GetAll";

function SidingMap() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [ur, setUrl] = useState("");
  const navigate = useNavigate();

  function fetchData(url) {
    fetch(url, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchData(url);
  }, []);


function activity(s){
  navigate(`/activity/${s}`);
}
  return (
    <div className={styles.map}>
      <h2>Siding Page</h2>
      <table className={styles.sidingdata}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Division</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <tr onClick={()=>activity(item.id)}
            key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.division}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SidingMap;
