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
		const {handleSubmit, previousPage, router} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<NavBar handleSubmit={handleSubmit} router={router}/>

				<Field name="email" type="email" component={renderField} label="Email"/>

				<FieldArray name="expenditures" component={renderExpenditures}/>

				<div>
					<ButtonPrevious toPage="0" onClick={previousPage}/>
					<ButtonNext toPage="2" handleSubmit={handleSubmit} mySubmit={this.submitView}/>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormSecondPage);
