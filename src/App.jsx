import React, {Component} from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import prefillReducer from "./prefill.jsx";
import WizardForm from "./WizardForm.jsx";


const reducers = {
	prefill: prefillReducer,
	form: formReducer
};
const middleware = applyMiddleware(thunk, logger());
const reducer = combineReducers(reducers);
const store = createStore(reducer, middleware);


class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<WizardForm onSubmit={data => {
					console.log(data);
				}}/>
			</Provider>
		);
	}
}
export default App;
