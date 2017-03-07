import React, {Component} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import normalizePhoneNumber from "../normalizePhoneNumber.jsx";
import {connect} from "react-redux";

const renderError = ({meta: {touched, error}}) => touched && error ?
	<span>{error}</span> : false;


class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
		this.clearConditionalText = this.clearConditionalText.bind(this);
	}

	clearConditionalText() {
		this.props.dispatch({
			type: "CLEAR_CONDITIONAL_FIELD",
			payload: "conditionalText"
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.wasCustomer === "false")
			this.clearConditionalText();
	}

	render() {
		const {handleSubmit, isFetching, wasCustomer} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label>Are you a new customer?</label>
					<div>
						<label><Field name="wasCustomer" component="input"
						              type="radio" value="true"/> Yes</label>
						<label><Field name="wasCustomer" component="input"
						              type="radio" value="false"/> No</label>
						<Field name="wasCustomer" component={renderError}/>
					</div>
				</div>
				{wasCustomer === "true" && <Field name="conditionalText" type="text"
				                                  component={renderField}
				                                  label="Why are you here?"
				                                  disabled={isFetching ? "disabled" : ""}/>}
				<Field name="firstName" type="text" component={renderField}
					   label="First Name"
					   disabled={isFetching ? "disabled" : ""}/>
				<Field name="lastName" type="text" component={renderField}
					   label="Last Name"
					   disabled={isFetching ? "disabled" : ""}/>
				<Field name="phoneNumber" type="text" component={renderField}
					   label="Phone number" normalize={normalizePhoneNumber}
					   disabled={isFetching ? "disabled" : ""}/>
				<div>
					<button type="submit" className="next"
							disabled={isFetching ? "disabled" : ""}>Next
					</button>
				</div>
				<label>{isFetching ? "Fetching data.." : "Fetched data successfully." }</label>
			</form>
		)
	};
}

WizardFormFirstPage = reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormFirstPage);


const selector = formValueSelector("wizard");

WizardFormFirstPage = connect(
	state => {
		const wasCustomer = selector(state, "wasCustomer");
		return {
			wasCustomer
		}
	}
)(WizardFormFirstPage);

export default WizardFormFirstPage;