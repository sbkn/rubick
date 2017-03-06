import React, {Component} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import normalizePhoneNumber from "./normalizePhoneNumber.jsx";
import fetchData from "./fetchData.jsx";
import {connect} from "react-redux";


const renderError = ({meta: {touched, error}}) => touched && error ?
	<span>{error}</span> : false;


class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
	}

	render() {
		const {handleSubmit, isFetching, isNewCustomer} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label>Are you a new customer?</label>
					<div>
						<label><Field name="isNewCustomer" component="input"
									  type="radio" value="true"/> Yes</label>
						<label><Field name="isNewCustomer" component="input"
									  type="radio" value="false"/> No</label>
						<Field name="isNewCustomer" component={renderError}/>
					</div>
				</div>
				{isNewCustomer && <Field name="conditionalText" type="text"
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

function mapStateToProps(state) {
	const {isNewCustomer} = selector(state, "isNewCustomer");
	return {
		initialValues: state.prefill.data,
		isFetching: state.prefill.fetching,
		hasFetched: state.prefill.fetched,
		isNewCustomer: isNewCustomer
	}
}

WizardFormFirstPage = connect(
	mapStateToProps,
	{fetchData}
)(WizardFormFirstPage);

export default WizardFormFirstPage;