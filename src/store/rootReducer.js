import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import developersReducer from "./developers/reducer";
import resourcesReducer from "./resources/reducer";

export default combineReducers({
  user: userReducer,
  developers: developersReducer,
  resources: resourcesReducer,
});
