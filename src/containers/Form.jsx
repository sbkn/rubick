import React, {Component} from "react";
import WizardForm from "./WizardForm.jsx";

class Form extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<WizardForm
					onSubmit={data => console.log(data)}
					currentPage={parseInt(this.props.params.pageIndex) || 0}
				/>
			</div>
		);
	}
}
export default Form;
