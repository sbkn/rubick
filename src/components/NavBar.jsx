import React from "react";

let NavBar = (props) => {
	const {goToPage} = props;
	return (
		<div>
			<label className="nav-label" onClick={() => goToPage(0)}>1</label>
			<label className="nav-label" onClick={() => goToPage(1)}>2</label>
			<label className="nav-label" onClick={() => goToPage(2)}>3</label>
			<label className="nav-label" onClick={() => goToPage(3)}>4</label>
		</div>
	)
};

export default NavBar;
