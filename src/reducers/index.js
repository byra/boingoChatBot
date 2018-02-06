import {combineReducers} from "redux";
import {status} from "./status";
import {chatMessages} from "./chatMessages";

const reducers = combineReducers({
    status,
    chatMessages
});

export default reducers;