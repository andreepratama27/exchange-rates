import { combineReducers } from "redux";
import home from "@src/scenes/home/reducers";
import modal from "./modal";

export default combineReducers({
  home,
  modal
});
