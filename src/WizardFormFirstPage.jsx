import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import axios from "axios";

function fetchData() {
	return (dispatch) => {
		dispatch({type: "FETCH_DATA_START"});
		/*axios.post("http://rest.learncode.academy/api/bollocks/customer", {
		 firstName: "Fred",
		 lastName: "Flintstone"
		 })
		 .then(() => {*/
		axios.get("http://rest.learncode.academy/api/bollocks/customer")
			.then(response => {
				console.log("FETCHED DATA FROM SERVER:", response.data);
				dispatch({type: "FETCH_DATA_FINISH", data: response.data[0]});
			})
			.catch(error => {
				console.error(error);
			});
		/*})
		 .catch(error => {
		 console.error(error);
		 });*/
	}
}

class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchData()
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
	validate
})(WizardFormFirstPage);

function mapStateToProps(state) {
	return {
		initialValues: state.prefill.data // pull initial values from prefill reducer
	}
}

WizardFormFirstPage = connect(
	mapStateToProps,
	{fetchData}     // bind data loading action creator
)(WizardFormFirstPage);

export default WizardFormFirstPage;