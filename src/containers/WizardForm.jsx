import React, {Component} from "react"
import WizardFormFirstPage from "./WizardFormFirstPage.jsx"
import WizardFormSecondPage from "./WizardFormSecondPage.jsx"
import WizardFormThirdPage from "./WizardFormThirdPage.jsx"
import WizardFormSummaryPage from "./WizardFormSummaryPage.jsx"
import {Router, Route, browserHistory} from "react-router";

class WizardForm extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" component={WizardFormFirstPage}/>
					<Route path="/0" component={WizardFormFirstPage}/>
					<Route path="/1" component={WizardFormSecondPage}/>
					<Route path="/2" component={WizardFormThirdPage}/>
					<Route path="/3" component={WizardFormSummaryPage}/>
				</Router>
			</div>
		)
	}
}

export default WizardForm;
