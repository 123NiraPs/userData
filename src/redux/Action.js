import axios from "axios";
import { GET_ADD_DATA, GET_ALL_DATA } from "./ActionType";

export const userData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return dispatch({
          type: GET_ALL_DATA,
          payload: res?.data,
        });
      })
      .catch((error) => {
        return error;
      });
  };
};

export const userId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        return dispatch({
          type: GET_ALL_DATA,
          payload: [res?.data],
        });
      })
      .catch((error) => {
        return error;
      });
  };
};

export const userPost = (param) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", param)
      .then((res) => {
        return dispatch({
          type: GET_ADD_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        return error;
      });
  };
};
