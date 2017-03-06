import React from "react"
import {Field, reduxForm} from "redux-form"
import validate from "../validate.jsx"

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
			<div>
				<label htmlFor="employed">Employed</label>
				<div>
					<Field name="employed" id="employed" component="input" type="checkbox"/>
				</div>
			</div>
			<div>
				<label>Notes</label>
				<div>
					<Field name="notes" component="textarea" placeholder="Notes"/>
				</div>
			</div>
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
})(WizardFormThirdPage);