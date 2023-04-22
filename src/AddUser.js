import React, { useState } from "react";
import { userPost } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
  const [title, setTitle] = useState();
  const [des, setDep] = useState();
  const dispatch = useDispatch();

  const numberofUser = useSelector((state) => state.allUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      title: title,
      body: des,
      id: numberofUser.length + 1,
    };
    dispatch(userPost(user));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="fname">Title</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label for="lname">Body</label>
      <br />
      <input
        input
        type="text"
        value={des}
        onChange={(e) => setDep(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="AddUser" />
    </form>
  );
};

export default AddUser;
