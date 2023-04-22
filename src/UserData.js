import axios from "axios";
import React from "react";
import { useState } from "react";
import { userData, userId } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
const UserData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.allUser);
  const handleClick = () => {
    dispatch(userData());
  };

  return (
    <>
      <button onClick={handleClick}>GetData</button>
      <h1>{user.length > 0 && user.length}</h1>
      <ul>
        {user.length > 0 &&
          user.map((item) => {
            return (
              <li key={item.id} onClick={() => dispatch(userId(item.id))}>
                {item.id} |{item.title} | {item.body}|
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default UserData;
