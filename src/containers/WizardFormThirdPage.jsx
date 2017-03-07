import React from "react"
import {Field, reduxForm} from "redux-form"
import validate from "../validate.js"
import DatePicker from "../components/DatePicker.jsx";
import renderField from "../renderField.jsx";
import PageLink from "./PageLink.jsx";

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

const renderColorSelector = ({input, meta: {touched, error}}) => (
	<div>
		<select {...input}>
			<option value="">Select a color...</option>
			{colors.map(val => <option value={val} key={val}>{val}</option>)}
		</select>
		{touched && error && <span>{error}</span>}
	</div>
);

const WizardFormThirdPage = (props) => {
	const {handleSubmit, previousPage} = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Favorite Color</label>
				<Field name="favoriteColor" component={renderColorSelector}/>
			</div>

			<Field name="employed" type="checkbox" component={renderField}
				   label="Employed"/>

			<DatePicker/>

			<div>
				<PageLink pageIndex="1" goToPage={handleSubmit}>
					<button type="button" className="previous" onClick={previousPage}>Previous</button>
				</PageLink>
				<PageLink pageIndex="3" goToPage={handleSubmit}>
					<button type="submit" className="next">Next</button>
				</PageLink>
			</div>
		</form>
	)
};

export default reduxForm({
	form: "wizard",
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})(WizardFormThirdPage);
