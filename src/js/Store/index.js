import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import User from './User'

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const Reducers = combineReducers({
	User
});

export default createStore(Reducers, enhancer);