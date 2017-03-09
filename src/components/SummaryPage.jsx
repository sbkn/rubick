import React, {Component} from "react";
import {formValueSelector} from "redux-form";
import {connect} from "react-redux";
import formatPhoneNumber from "../formatPhoneNumber.js";

class SummaryPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {fullName, phoneNumber} = this.props;

		return (
			<div>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<br/>
					<label htmlFor="fullName">{fullName}</label>
				</div>

				<br/>

				<div>
					<label htmlFor="phoneNumber">Phone Number</label>
					<br/>
					<label htmlFor="phoneNumber">{phoneNumber}</label>
				</div>
			</div>
		)
	}
}

const selector = formValueSelector("wizard");

SummaryPage = connect(
	state => {
		const {firstName, lastName, phoneNumber} = selector(state, "firstName", "lastName", "phoneNumber");
		return {
			fullName: `${firstName || ""} ${lastName || ""}`,
			phoneNumber: formatPhoneNumber(phoneNumber)
		}
	}
)(SummaryPage);

export default SummaryPage;
