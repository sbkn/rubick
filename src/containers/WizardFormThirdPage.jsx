import React, {Component} from "react"
import {Field, reduxForm} from "redux-form"
import validate from "../validate.js"
import DatePicker from "../components/DatePicker.jsx";
import renderField from "../renderField.jsx";
import PageLink from "./PageLink.jsx";
import NavBar from "./NavBar.jsx";

const colors = ["Red", "Orange", "Yellow"];

const renderColorSelector = ({input, meta: {touched, error}}) => (
	<div>
		<select {...input}>
			<option value="">Select a color...</option>
			{colors.map(val => <option value={val} key={val}>{val}</option>)}
		</select>
		{touched && error && <span>{error}</span>}
	</div>
);

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
					<label>Favorite Color</label>
					<Field name="favoriteColor" component={renderColorSelector}/>
				</div>

				<Field name="employed" type="checkbox" component={renderField}
				       label="Employed"/>

				<DatePicker/>

				<div>
					<PageLink pageIndex="1" handleSubmit={handleSubmit}>
						<button type="button" className="previous" onClick={previousPage}>Previous</button>
					</PageLink>
					<PageLink pageIndex="3" handleSubmit={handleSubmit}
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
})(WizardFormThirdPage);
