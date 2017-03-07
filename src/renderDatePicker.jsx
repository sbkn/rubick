import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

moment.locale("DE");

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error}}) => (
	<div>
		<DatePicker
			{...input}
			dateForm="MM/DD/YYYY"
			selected={input.value ? moment(input.value, "MM/DD/YYYY") : null}
			minDate={moment()}
			maxDate={moment().add(5, "days")}
			excludeDates={[moment().add(2, "days"), moment().subtract(1, "days")]}
		/>
		{touched && error && <span>{error}</span>}
	</div>
);

export default renderDatePicker;