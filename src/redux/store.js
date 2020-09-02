import { createStore } from "redux";
import scrollReducer from "./reducer";

const store = createStore(scrollReducer);

export default store;
