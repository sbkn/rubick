import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";

class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field name="firstName" type="text" component={renderField} label="First Name"/>
				<Field name="lastName" type="text" component={renderField} label="Last Name"/>
				<div>
					<button type="submit" className="next">Next</button>
				</div>
			</form>
		)
	};
}

WizardFormFirstPage = reduxForm({
	form: "wizard",
	destroyOnUnmount: false,        // <------ preserve form data
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
	enableReinitialize: true,  // <------ TOOK ME 3 HOURS TO FIND THIS M8 WAS NEEDED ..
	validate
})(WizardFormFirstPage);

export default WizardFormFirstPage;