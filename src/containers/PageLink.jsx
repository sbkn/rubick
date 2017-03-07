import React from "react";
import {Link} from "react-router";

const PageLink = ({pageIndex, goToPage, children}) => (
	<Link
		to={pageIndex}
		onClick={() => goToPage(pageIndex)}
		activeStyle={{
			textDecoration: "none",
			color: "black"
		}}
	>
		{children}
	</Link>
);

export default PageLink;
