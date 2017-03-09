import React from "react";
import {Link} from "react-router";

const PageLink = ({toPath, handleSubmit, customSubmit, children}) => (
	<Link
		to={toPath}
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
