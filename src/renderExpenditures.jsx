import React from "react";
import {Field} from "redux-form"
import renderField from "./renderField.jsx"


const renderExpenditures = ({fields, meta: {error}}) => (
	<ul>
		<li>
			<button type="button" onClick={() => fields.push()}>Add Expenditure</button>
		</li>
		{fields.map((hobby, index) =>
			<li key={index}>
				<button
					type="button"
					title="Remove Expenditure"
					onClick={() => fields.remove(index)}>Remove Expenditure
				</button>
				<Field
					name={hobby}
					type="text"
					component={renderField}
					label={`Expenditure #${index + 1}`}/>
			</li>
		)}
		{error && <li className="error-label">{error}</li>}
	</ul>
);

export default renderExpenditures;