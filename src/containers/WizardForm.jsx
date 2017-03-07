import React, {Component, PropTypes} from "react"
import WizardFormFirstPage from "./WizardFormFirstPage.jsx"
import WizardFormSecondPage from "./WizardFormSecondPage.jsx"
import WizardFormThirdPage from "./WizardFormThirdPage.jsx"
import WizardFormSummaryPage from "./WizardFormSummaryPage.jsx"
import {Router, Route, browserHistory} from "react-router";
import NavBar from "../components/NavBar.jsx";
import Footer from "./Footer.jsx";

class WizardForm extends Component {

	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.goToPage = this.goToPage.bind(this);
		this.state = {
			page: 0
		};
	}

	nextPage() {
		this.setState({page: this.state.page + 1})
	}

	previousPage() {
		this.setState({page: this.state.page - 1})
	}

	goToPage(pageNumber) {
		console.log("Will not validate anything! THIS IS A MOCK!");
		this.setState({page: pageNumber});
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

				{false && <NavBar goToPage={this.goToPage}/>}

				{false && <Footer goToPage={this.goToPage}/>}
			</div>
		)
	}
}

export default WizardForm;
