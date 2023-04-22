import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./redux/Reducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(Reducer, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
