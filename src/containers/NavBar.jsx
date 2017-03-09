import React, {Component} from "react";
import PageLink from "./PageLink.jsx";

const PAGES = [{path: "0"}, {path: "1"}, {path: "2"}, {path: "3"}];

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {handleSubmit, router} = this.props;
		const pages = PAGES.map(page => {
			return (
				<PageLink toPath={page.path}
				          handleSubmit={handleSubmit}
				          customSubmit={() => router.push(page.path)}
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

NavBar.propTypes = {
	router: React.PropTypes.object.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
};

export default NavBar;