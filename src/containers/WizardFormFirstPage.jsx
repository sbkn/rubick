import React, {Component} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import normalizePhoneNumber from "../normalizePhoneNumber.jsx";
import WasCustomer from "../components/WasCustomer.jsx";
import FetchDataStatus from "../components/FetchDataStatus.jsx";
import fetchData from "../actions/fetchData.jsx";
import NavBar from "./NavBar.jsx";
import ButtonNext from "../components/ButtonNext.jsx";


class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
		this.clearConditionalText = this.clearConditionalText.bind(this);
		this.submitView = this.submitView.bind(this);
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
	}

	clearConditionalText() {
		this.props.dispatch({
			type: "CLEAR_CONDITIONAL_FIELDS",
			payload: ["conditionalText"]
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.wasCustomer === "false")
			this.clearConditionalText();
	}

	submitView() {
		this.props.router.push("/1");
	}

	render() {
		const {handleSubmit, isFetching, wasCustomer, fetchDataError, router} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<NavBar handleSubmit={handleSubmit} router={router}/>
				<WasCustomer/>
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
					<ButtonNext toPage="1"
					            handleSubmit={handleSubmit}
					            customSubmit={this.submitView}
					            disabled={isFetching ? "disabled" : ""}
					/>
				</div>
				<FetchDataStatus isFetching={isFetching} error={fetchDataError}/>
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

function mapStateToProps(state) {
	return {
		initialValues: state.prefill.data,
		isFetching: state.prefill.fetching,
		hasFetched: state.prefill.fetched,
		fetchDataError: state.prefill.error
	}
}

WizardFormFirstPage = connect(
	mapStateToProps,
	{fetchData}
)(WizardFormFirstPage);

export default WizardFormFirstPage;