import React from "react"
import PageLink from "./PageLink.jsx"

const NavBar = (props) => (
	<p>
		<PageLink pageIndex="0" handleSubmit={() => props.handleSubmit("0")}>
			0
		</PageLink>
		<PageLink pageIndex="1">
			1
		</PageLink>
		<PageLink pageIndex="2">
			2
		</PageLink>
		<PageLink pageIndex="3">
			3
		</PageLink>
	</p>
);

export default NavBar;