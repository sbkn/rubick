import React, {Component, PropTypes} from 'react'
import WizardFormFirstPage from './WizardFormFirstPage.jsx'
import WizardFormSecondPage from './WizardFormSecondPage.jsx'
import WizardFormThirdPage from './WizardFormThirdPage.jsx'
import WizardFormSummaryPage from './WizardFormSummaryPage.jsx'


class WizardForm extends Component {

	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1
		};
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 })
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 })
	}

	render() {

		const { onSubmit } = this.props;
		const { page } = this.state;

		return (
			<div>
				{page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
				{page === 2 &&
				<WizardFormSecondPage previousPage={this.previousPage}
									  onSubmit={this.nextPage}/>}
				{page === 3 &&
				<WizardFormThirdPage previousPage={this.previousPage}
									 onSubmit={this.nextPage}/>}
				{page === 4 &&
				<WizardFormSummaryPage previousPage={this.previousPage}
									   onSubmit={onSubmit}/>}
			</div>
		)
	}
}

WizardForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default WizardForm;