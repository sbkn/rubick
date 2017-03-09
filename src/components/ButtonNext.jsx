import React from "react";
import PageLink from "../containers/PageLink.jsx";

let ButtonNext = (props) => {
	const {handleSubmit, customSubmit, toPage, disabled} = props;
	return (
		<PageLink toPath={toPage}
		          handleSubmit={handleSubmit}
		          customSubmit={customSubmit}
		>
			<button className="next" disabled={disabled}>Next</button>
		</PageLink>
	)
};

export default ButtonNext;
