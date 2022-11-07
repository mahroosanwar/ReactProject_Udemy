import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <li className="user-list">
      {props.info.map((info) => (
        <div className="user-info" key={info.id}>
          <h4>
            {info.name} {" - "}
            {info.age} (Years Old)
          </h4>
        </div>
      ))}
    </li>
  );
};

export default UserList;
