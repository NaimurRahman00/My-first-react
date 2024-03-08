import React, { useEffect, useState } from "react";
import './style.css';
import './Bondhu';
import Bondhu from "./Bondhu";

const New = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="box">
      <h2>Users: {users.length}</h2>
      {
        users.map(bondhu => <Bondhu bondhu={bondhu}></Bondhu>)
      }
    </div>

  );
};

export default New;
