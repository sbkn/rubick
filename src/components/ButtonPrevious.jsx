import React from "react";
import PageLink from "../containers/PageLink.jsx";

let ButtonPrevious = (props) => {
	const {toPage, onClick} = props;
	return (
		<PageLink toPath={toPage}>
			<button type="button" onClick={onClick} className="previous">Previous</button>
		</PageLink>
	)
};

export default ButtonPrevious;
