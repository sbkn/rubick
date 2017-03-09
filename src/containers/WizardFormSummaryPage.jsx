import React, {Component} from "react";
import {reduxForm} from "redux-form";
import validate from "../validate.js";
import SummaryPage from "../components/SummaryPage.jsx";
import NavBar from "./NavBar.jsx";
import ButtonPrevious from "../components/ButtonPrevious.jsx";


class WizardFormSummaryPage extends Component {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(formData) {
		console.log("Submitted data:", formData);
	}

	render() {
		const {handleSubmit, pristine, submitting, router} = this.props;

		return (
			<form onSubmit={handleSubmit(this.submitForm)}>

				<NavBar handleSubmit={handleSubmit} router={router}/>

				<SummaryPage/>

				<div>
					<ButtonPrevious toPage="2"/>
					<button type="submit" disabled={pristine || submitting}>
						Submit
					</button>
				</div>
			</form>
		)
	}
}

WizardFormSummaryPage.propTypes = {
	router: React.PropTypes.object.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
};

WizardFormSummaryPage = reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormSummaryPage);

export default WizardFormSummaryPage;
