import {applyMiddleware, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import prefillReducer from "./prefillReducer.jsx";

const reducers = {
	prefill: prefillReducer,
	form: formReducer
};

export function getMiddleware() {

	return applyMiddleware(thunk, logger());
}

export function getReducer() {

	return combineReducers(reducers);
}