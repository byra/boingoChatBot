import {combineReducers} from "redux";
import {authen} from "./authen";
import {status} from "./status";
import {chatMessages} from "./chatMessages";

const reducers = combineReducers({
    authen,
    status,
    chatMessages
});

export default reducers;