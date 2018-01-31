import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers/index";

const configureStore = () => {
    const persistentState = {};
    const middleWare = applyMiddleware(logger, thunk, promise());
    return createStore(reducers,persistentState, middleWare);
};

export default configureStore;