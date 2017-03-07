import React, {Component} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import normalizePhoneNumber from "../normalizePhoneNumber.jsx";
import WasCustomer from "../components/WasCustomer.jsx";
import PageLink from "./PageLink.jsx";
import fetchData from "../actions/fetchData.jsx";


class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
		this.clearConditionalText = this.clearConditionalText.bind(this);
		this.mySubmit = this.mySubmit.bind(this);
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
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

	mySubmit() {
		console.log("MY SUBMIT!");
		console.log(this.props);
		this.props.router.push("/1");
	}

	render() {
		const {handleSubmit, isFetching, wasCustomer} = this.props;
		return (
			<form onSubmit={handleSubmit}>
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
					<PageLink pageIndex="1" goToPage={handleSubmit} mySubmit={this.mySubmit}>
						<button type="submit" className="next"
						        disabled={isFetching ? "disabled" : ""}>Next
						</button>
					</PageLink>
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