import React from "react";
import {Link} from "react-router";

const PageLink = ({pageIndex, handleSubmit, mySubmit, children}) => (
	<Link
		to={pageIndex}
		onClick={handleSubmit && mySubmit ? handleSubmit(mySubmit) : null}
		activeStyle={{
			textDecoration: "none",
			color: "black"
		}}
		className="nav-label"
	>
		{children}
	</Link>
);

export default PageLink;
