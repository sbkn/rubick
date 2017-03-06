import React from "react";

let SummaryPage = (props) => {
	const {fullName, phoneNumber} = props;
	return (
		<div>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<br/>
				<label htmlFor="fullName">{fullName}</label>
			</div>
			<br/>

			<div>
				<label htmlFor="phoneNumber">Phone Number</label>
				<br/>
				<label htmlFor="phoneNumber">{phoneNumber}</label>
			</div>
		</div>
	)
};

export default SummaryPage;
