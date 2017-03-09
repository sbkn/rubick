import React from "react";

let FetchDataStatus = (props) => {
	const {isFetching, error} = props;
	return (
		<div>
			{!error && <label>{isFetching ? "Fetching data.." : "Fetched data successfully." }</label>}
			{!isFetching && error && <label
				className="error-label">{"Fetching data failed! " + error }</label>}
		</div>
	)
};

export default FetchDataStatus;
