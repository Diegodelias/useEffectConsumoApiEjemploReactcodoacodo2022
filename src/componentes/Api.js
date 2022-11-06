import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
        .then(data => data.json())
        .then(json => setUsers(json.data));   
}, []);
  return (
    <div>
      <h2>Comunicación con Api</h2>
      <ul>
        {users.map(user => (
          <li><img src={user.avatar} /> </li>

        ))}
      </ul>
    </div>
  )
}

export default Api;