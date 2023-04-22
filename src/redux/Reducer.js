import { GET_ADD_DATA, GET_ALL_DATA } from "./ActionType";

const INITIAL_STATE = {
  allUser: [],
};
const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, allUser: action.payload };
    case GET_ADD_DATA:
      return {
        ...state,
        allUser: [...state.allUser, action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
