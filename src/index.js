import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// container config
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import rootReducer from "./redux/indexReducer";
// import * as serviceWorker from "./serviceWorker";

// const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleWare(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
