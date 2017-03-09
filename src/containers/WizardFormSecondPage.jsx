import React, {Component} from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import renderExpenditures from "../renderExpenditures.jsx";
import NavBar from "./NavBar.jsx";
import ButtonNext from "../components/ButtonNext.jsx";
import ButtonPrevious from "../components/ButtonPrevious.jsx";


class WizardFormSecondPage extends Component {

	constructor(props) {
		super(props);
		this.submitView = this.submitView.bind(this);
	}

	submitView() {
		this.props.router.push("/2");
	}

	render() {
		const {handleSubmit, router} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<NavBar handleSubmit={handleSubmit} router={router}/>

				<Field name="email" type="email" component={renderField} label="Email"/>

				<FieldArray name="expenditures" component={renderExpenditures}/>

				<div>
					<ButtonPrevious toPage="0"/>
					<ButtonNext handleSubmit={handleSubmit} customSubmit={this.submitView}/>
				</div>
			</form>
		)
	}
}

WizardFormSecondPage.propTypes = {
	router: React.PropTypes.object.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormSecondPage);
