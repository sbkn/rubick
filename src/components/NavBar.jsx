import React from "react";

let NavBar = (props) => {
	const {goToPage} = props;
	return (
		<div>
			<label className="nav-label" onClick={() => goToPage(1)}>1</label>
			<label className="nav-label" onClick={() => goToPage(2)}>2</label>
			<label className="nav-label" onClick={() => goToPage(3)}>3</label>
			<label className="nav-label" onClick={() => goToPage(4)}>4</label>
		</div>
	)
};

export default NavBar;
