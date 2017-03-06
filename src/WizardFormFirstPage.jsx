import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import normalizeDownPayment from "./normalizeDownPayment.jsx";

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
				<Field name="downPayment" type="text" component={renderField}
					   label="Down Payment" normalize={normalizeDownPayment}/>
				<div>
					<button type="submit" className="next">Next</button>
				</div>
			</form>
		)
	};
}

WizardFormFirstPage = reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormFirstPage);

export default WizardFormFirstPage;