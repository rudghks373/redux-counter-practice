import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

//리덕스 관련 불러오기.
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
//리덕스 생성.
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
