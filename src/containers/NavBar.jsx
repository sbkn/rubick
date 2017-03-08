import React, {Component} from "react";
import PageLink from "./PageLink.jsx";

const PAGES = [{path: "0"}, {path: "1"}, {path: "2"}, {path: "3"}];

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {handleSubmit, mySubmit} = this.props;
		const pages = PAGES.map(page => {
			return (
				<PageLink pageIndex={page.path}
						  handleSubmit={handleSubmit}
						  mySubmit={mySubmit}
						  key={page.path}
				>
					{page.path}
				</PageLink>
			)
		});
		return (
			<p>
				{pages}
			</p>
		);
	}
}

export default NavBar;