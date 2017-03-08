import {applyMiddleware, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";
import prefillReducer from "./prefillReducer.jsx";

const reducers = {
	prefill: prefillReducer,
	form: formReducer.plugin({
		wizard: (state, action) => {
			switch (action.type) {
				case "CLEAR_CONDITIONAL_FIELDS":
					const newState = {
						...state,
						values: {
							...state.values
						},
						fields: {
							...state.fields
						}
					};
					action.payload.map(fieldName => {
						newState.values[fieldName] = "";
						newState.fields[fieldName] = "";
					});
					return newState;
				default:
					return state
			}
		}
	})
};

export function getMiddleware() {

	return applyMiddleware(thunk, logger());
}

export function getReducer() {

	return combineReducers(reducers);
}