import React, {Component} from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import WizardForm from "./WizardForm.jsx";

import {getReducer, getMiddleware} from "../reducers/reducers.js";

const store = createStore(getReducer(), getMiddleware());

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<WizardForm onSubmit={data => console.log(data)}
				/>
			</Provider>
		);
	}
}
export default App;
