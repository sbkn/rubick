import React from "react";
import renderDatePicker from "../renderDatePicker.jsx";
import {Field} from "redux-form";

let DatePicker = () => {
	return (
		<div>
			<label>Pick a Date</label>
			<div>
				<Field name="datePicker" component={renderDatePicker}/>
			</div>
		</div>
	)
};

export default DatePicker;
