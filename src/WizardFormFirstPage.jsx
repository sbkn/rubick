import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import normalizePhoneNumber from "./normalizePhoneNumber.jsx";
import fetchData from "./fetchData.jsx";
import {connect} from "react-redux";


class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
	}

	render() {
		const {handleSubmit, isFetching} = this.props;
		return (
			<form onSubmit={handleSubmit}>
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

function mapStateToProps(state) {
	return {
		initialValues: state.prefill.data,
		isFetching: state.prefill.fetching,
		hasFetched: state.prefill.fetched
	}
}

WizardFormFirstPage = connect(
	mapStateToProps,
	{fetchData}
)(WizardFormFirstPage);

export default WizardFormFirstPage;