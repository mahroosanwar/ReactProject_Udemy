import React, { useState } from "react";
import "./UserForm.css";
import Button from "../../UI/Button";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const infoData = {
        name: enteredName,
        age: enteredAge
    };
    props.onSaveUserInfo(infoData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="user-form__control">
        <div className="form-name">
          <label>Name</label>
          <input type="text" onChange={nameInputChangeHandler} />
        </div>
        <div className="form-age">
          <label>Age (Years)</label>
          <input
            type="number"
            max="100"
            step="1"
            onChange={ageInputChangeHandler}
          />
        </div>
        <Button />
      </div>
    </form>
  );
};

export default UserForm;
