import React from "react";
import UserForm from "./UserForm";

const NewUser = (props) => {
    const saveUserInfoHandler = (enteredInfoData) => {
        const infoData = {
            ...enteredInfoData,
            id: Math.random().toString(),
        };
        props.onAddInfo(infoData);
    };

    return <div>
        <UserForm onSaveUserInfo={saveUserInfoHandler}/>
    </div>

};

export default NewUser;