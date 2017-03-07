import React, {Component} from "react";
import {Provider} from "react-redux";
import Form from "./Form.jsx";
import {createStore} from "redux";
import {Router, Route, browserHistory} from "react-router";

import {getReducer, getMiddleware} from "../reducers/reducers.js";

const store = createStore(getReducer(), getMiddleware());

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<Router history={browserHistory}>
					<Route path="/(:pageIndex)" component={Form}/>
				</Router>
			</Provider>
		);
	}
}
export default App;
