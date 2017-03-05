import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import {load as loadAccount} from "./account.jsx"


const data = {  // used to populate "account" reducer when "Load" is clicked
	firstName: "Jane",
	lastName: "Doe"
};

let WizardFormFirstPage = (props) => {
	const {handleSubmit, load} = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field name="firstName" type="text" component={renderField} label="First Name"/>
			<Field name="lastName" type="text" component={renderField} label="Last Name"/>
			<div>
				<button type="button" onClick={() => load(data)}>Load Account</button>
			</div>
			<div>
				<button type="submit" className="next">Next</button>
			</div>
		</form>
	)
};

WizardFormFirstPage = reduxForm({
	form: "wizard",                 // <------ same form name
	destroyOnUnmount: false,        // <------ preserve form data
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
	validate
})(WizardFormFirstPage);

WizardFormFirstPage = connect(
	state => ({
		initialValues: state.account.data // pull initial values from account reducer
	}),
	{load: loadAccount}               // bind account loading action creator
)(WizardFormFirstPage);

export default WizardFormFirstPage;