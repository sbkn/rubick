import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import validate from "./validate.jsx";
import renderField from "./renderField.jsx";
import {load as loadAccount} from "./account.jsx"


const data = {
	firstName: "Jane",
	lastName: "Doe"
};

class WizardFormFirstPage extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: false};
	}

	componentDidMount() {
		this.setState({loading: true});
		const {load} = this.props;
		setTimeout(() => {
			load(data);
			this.setState({loading: false});
		}, 1500);
	}

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field name="firstName" type="text" component={renderField} label="First Name"/>
				<Field name="lastName" type="text" component={renderField} label="Last Name"/>
				<div>
					{this.state.loading ? <label>Loading data...</label> :
						<button type="submit" className="next">Next</button>}

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

WizardFormFirstPage = connect(
	state => ({
		initialValues: state.account.data // pull initial values from account reducer
	}),
	{load: loadAccount}               // bind account loading action creator
)(WizardFormFirstPage);

export default WizardFormFirstPage;