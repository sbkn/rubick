import React from "react"
import PageLink from "./PageLink.jsx"

const NavBar = (props) => (
	<p>
		<PageLink pageIndex="0" handleSubmit={props.handleSubmit}
				  mySubmit={props.mySubmit}>
			0
		</PageLink>
		<PageLink pageIndex="1" handleSubmit={props.handleSubmit}
				  mySubmit={props.mySubmit}>
			1
		</PageLink>
		<PageLink pageIndex="2" handleSubmit={props.handleSubmit}
				  mySubmit={props.mySubmit}>
			2
		</PageLink>
		<PageLink pageIndex="3" handleSubmit={props.handleSubmit}
				  mySubmit={props.mySubmit}>
			3
		</PageLink>
	</p>
);

export default NavBar;