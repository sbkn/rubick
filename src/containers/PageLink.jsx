import React from "react";
import {Link} from "react-router";

const PageLink = ({pageIndex, goToPage, mySubmit, children}) => (
	<Link
		to={pageIndex}
		onClick={goToPage && mySubmit ? goToPage(mySubmit) : null}
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
