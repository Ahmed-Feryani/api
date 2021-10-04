import React, { useEffect, useState } from "react";
import http from "./http/http";
import profile from "./profile.jpg";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    http
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className="container">
        <div
          style={{
            textAlign: "center",
          }}
        >
          something went wrong
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cards">
        {users.map(({ name, email, website, id }) => (
          <div className="card" key={id}>
            <img src={profile} alt="" />
            <h4> {name} </h4>
            <div className="email">
              email : <small>{email}</small>
            </div>
            <div>
              website : <small> {website} </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
