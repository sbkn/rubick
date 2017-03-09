import React from "react";

const renderField = ({input, label, type, disabled, meta: {touched, error}}) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type}
			       disabled={disabled}/>
			{touched && error && <span className="error-label">{error}</span>}
		</div>
	</div>
);

export default renderField;