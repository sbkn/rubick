import React, {Component} from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import renderExpenditures from "../renderExpenditures.jsx";
import PageLink from "./PageLink.jsx";
import NavBar from "./NavBar.jsx";


class WizardFormSecondPage extends Component {

	constructor(props) {
		super(props);
		this.submitView = this.submitView.bind(this);
	}

	submitView() {
		this.props.router.push("/2");
	}

	render() {
		const {handleSubmit, previousPage} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<NavBar handleSubmit={handleSubmit} mySubmit={this.submitView}/>

				<Field name="email" type="email" component={renderField} label="Email"/>

				<FieldArray name="expenditures" component={renderExpenditures}/>

				<div>
					<PageLink pageIndex="0">
						<button type="button" className="previous" onClick={previousPage}>Previous</button>
					</PageLink>
					<PageLink pageIndex="2" handleSubmit={handleSubmit}
							  mySubmit={this.submitView}>
						<button className="next">Next</button>
					</PageLink>

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
