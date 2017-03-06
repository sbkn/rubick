import React from "react"
import {Field, reduxForm, formValueSelector} from "redux-form"
import {connect} from "react-redux";
import validate from "./validate.jsx"

let WizardFormSummaryPage = (props) => {
	const {handleSubmit, pristine, previousPage, submitting, fullName} = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<br/>
				<label htmlFor="fullName">{fullName}</label>
			</div>
			<div>
				<button type="button" className="previous"
						onClick={previousPage}>Previous
				</button>
				<button type="submit" disabled={pristine || submitting}>Submit
				</button>
			</div>
		</form>
	)
};

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
		const {firstName, lastName} = selector(state, "firstName", "lastName");
		return {
			fullName: `${firstName || ""} ${lastName || ""}`
		}
	}
)(WizardFormSummaryPage);

export default WizardFormSummaryPage;
