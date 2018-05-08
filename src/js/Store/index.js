import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import User from './User'



export default function makeStore(history)
{
	const middlewareRouter = routerMiddleware(history) 
	const routingEnchaser = applyMiddleware(middlewareRouter) //совместимость react-router 4 и react-redux

	const Reducers = combineReducers({
		User,
		router: routerReducer
	});

	return createStore(Reducers, routingEnchaser);
}