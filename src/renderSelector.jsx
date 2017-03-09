import React from "react";

const renderSelector = ({label, options, input, meta: {touched, error}}) => (
	<div>
		<label>{label}</label>
		<div>
			<select {...input}>
				<option value="">{label}</option>
				{options.map(val => <option value={val}
											key={val}>{val}</option>)}
			</select>
			{touched && error && <span className="error-label">{error}</span>}
		</div>
	</div>
);

export default renderSelector;