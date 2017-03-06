import React from "react";
import {Field, FieldArray, reduxForm} from "redux-form";
import validate from "../validate.js";
import renderField from "../renderField.jsx";
import renderExpenditures from "../renderExpenditures.jsx";


const WizardFormSecondPage = (props) => {
	const { handleSubmit, previousPage } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field name="email" type="email" component={renderField} label="Email"/>

			<FieldArray name="expenditures" component={renderExpenditures}/>

			<div>
				<button type="button" className="previous" onClick={previousPage}>Previous</button>
				<button type="submit" className="next">Next</button>
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
})(WizardFormSecondPage)
