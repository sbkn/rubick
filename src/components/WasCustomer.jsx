import React, {Component} from "react";
import {Field, formValueSelector} from "redux-form";
import {connect} from "react-redux";
import renderField from "../renderField.jsx";
import purgeFieldValues from "../purgeFieldValues.js"

const renderError = ({meta: {touched, error}}) => touched && error ?
	<span>{error}</span> : false;

class WasCustomer extends Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		const fieldsToPurge = [];

		if (nextProps.wasCustomer === "false")
			fieldsToPurge.push("conditionalText");

		purgeFieldValues(this.props.dispatch, fieldsToPurge);
	}

	render() {
		const {wasCustomer, isFetching} = this.props;
		return (
			<div>
				<label>Are you a new customer?</label>
				<div>
					<label><Field name="wasCustomer" component="input"
								  type="radio" value="true"/> Yes</label>
					<label><Field name="wasCustomer" component="input"
								  type="radio" value="false"/> No</label>
					<Field name="wasCustomer" component={renderError}/>
				</div>
				{wasCustomer === "true" &&
				<Field name="conditionalText" type="text"
					   component={renderField}
					   label="Why are you here?"
					   disabled={isFetching ? "disabled" : ""}/>}
			</div>
		)
	}
}

const selector = formValueSelector("wizard");

WasCustomer = connect(
	state => {
		const wasCustomer = selector(state, "wasCustomer");
		return {
			wasCustomer
		}
	}
)(WasCustomer);

export default WasCustomer;
