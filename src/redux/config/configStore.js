import { createStore } from "redux";
import { combineReducers } from "redux";
import til_list from "../modules/tils";

const rootReducer = combineReducers({
  til_list,
});
const store = createStore(rootReducer);

export default store;
