import React from "react";
import {Field} from "redux-form";

const renderError = ({meta: {touched, error}}) => touched && error ?
	<span>{error}</span> : false;

let WasCustomer = () => {
	return (
		<div>
			<label>Are you a new customer?</label>
			<div>
				<label><Field name="wasCustomer" component="input"
							  type="radio" value="true"/> Yes</label>
				<label><Field name="wasCustomer" component="input"
							  type="radio" value="false"/> No</label>
				<Field name="wasCustomer" component={renderError}/>
			</div>
		</div>
	)
};

export default WasCustomer;
