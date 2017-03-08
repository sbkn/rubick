import React, {Component} from "react";
import {reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";
import validate from "../validate.js";
import SummaryPage from "../components/SummaryPage.jsx";
import PageLink from "./PageLink.jsx";
import NavBar from "./NavBar.jsx";

class WizardFormSummaryPage extends Component {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(formData) {
		console.log("Submitted data:", formData);
	}

	render() {
		const {handleSubmit, pristine, previousPage, submitting, fullName, phoneNumber, router} = this.props;

		return (
			<form onSubmit={handleSubmit(this.submitForm)}>
				<NavBar handleSubmit={handleSubmit} router={router}/>

				<SummaryPage fullName={fullName} phoneNumber={phoneNumber}/>
				<div>
					<PageLink pageIndex="2" handleSubmit={handleSubmit}>

						<button type="button" className="previous"
						        onClick={previousPage}>
							Previous
						</button>
					</PageLink>

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
