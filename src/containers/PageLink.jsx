import React from "react";
import {Link} from "react-router";

const PageLink = ({pageIndex, handleSubmit, customSubmit, children}) => (
	<Link
		to={pageIndex}
		onClick={handleSubmit && customSubmit ? handleSubmit(customSubmit) : null}
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
