import React from "react";
import PageLink from "../containers/PageLink.jsx";

let ButtonNext = (props) => {
	const {handleSubmit, mySubmit, toPage, disabled} = props;
	return (
		<PageLink pageIndex={toPage}
		          handleSubmit={handleSubmit}
		          mySubmit={mySubmit}
		>
			<button className="next" disabled={disabled}>Next</button>
		</PageLink>
	)
};

export default ButtonNext;
