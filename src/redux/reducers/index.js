import { combineReducers } from "redux";
import tasksReducer from "./task";

const rootReducer = combineReducers({data: tasksReducer});

export default rootReducer;