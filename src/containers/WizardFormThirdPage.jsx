import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import validate from "../validate.js";
import DatePicker from "../components/DatePicker.jsx";
import renderField from "../renderField.jsx";
import renderSelector from "../renderSelector.jsx";
import NavBar from "./NavBar.jsx";
import ButtonNext from "../components/ButtonNext.jsx";
import ButtonPrevious from "../components/ButtonPrevious.jsx";

const colors = ["Red", "Orange", "Yellow"];

class WizardFormThirdPage extends Component {

	constructor(props) {
		super(props);
		this.submitView = this.submitView.bind(this);
	}

	submitView() {
		this.props.router.push("/3");
	}

	render() {
		const {handleSubmit, previousPage, router} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<NavBar handleSubmit={handleSubmit} router={router}/>

				<div>
					<Field name="favoriteColor" component={renderSelector}
						   label="Favorite Color"
						   options={colors}/>
				</div>

				<Field name="employed" type="checkbox" component={renderField}
					   label="Employed"/>

				<DatePicker/>

				<div>
					<ButtonPrevious toPage="1" onClick={previousPage}/>
					<ButtonNext toPage="3" handleSubmit={handleSubmit}
								customSubmit={this.submitView}/>
				</div>
			</form>
		)
	}
}

WizardFormThirdPage.propTypes = {
	router: React.PropTypes.object.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormThirdPage);
