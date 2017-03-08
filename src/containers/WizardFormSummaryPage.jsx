import React, {Component} from "react";
import {reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";
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
		const {handleSubmit, pristine, previousPage, submitting, router} = this.props;
		const {fullName, phoneNumber} = this.props;

		return (
			<form onSubmit={handleSubmit(this.submitForm)}>
				<NavBar handleSubmit={handleSubmit} router={router}/>

				<SummaryPage fullName={fullName} phoneNumber={phoneNumber}/>

				<div>
					<ButtonPrevious toPage="2" onClick={previousPage}/>
					<button type="submit" disabled={pristine || submitting}>
						Submit
					</button>
				</div>
			</form>
		)
	}
}

function formatPhoneNumber(value) {
	if (!value) return "";
	value = value.replace(/-/g, "");
	return `(${value.substr(0, 3)})${value.substr(3)}`;
}

WizardFormSummaryPage = reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormSummaryPage);

const selector = formValueSelector("wizard");

WizardFormSummaryPage = connect(
	state => {
		const {firstName, lastName, phoneNumber} = selector(state, "firstName", "lastName", "phoneNumber");
		return {
			fullName: `${firstName || ""} ${lastName || ""}`,
			phoneNumber: formatPhoneNumber(phoneNumber)
		}
	}
)(WizardFormSummaryPage);

export default WizardFormSummaryPage;
