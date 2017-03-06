import React, {Component, PropTypes} from 'react'
import WizardFormFirstPage from './WizardFormFirstPage.jsx'
import WizardFormSecondPage from './WizardFormSecondPage.jsx'
import WizardFormThirdPage from './WizardFormThirdPage.jsx'
import fetchData from "./fetchData.jsx";
import {connect} from "react-redux";


class WizardForm extends Component {

	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1
		}
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
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
				{page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} initialValues={this.props.initialValues}/>}
				{page === 2 &&
				<WizardFormSecondPage previousPage={this.previousPage} initialValues={this.props.initialValues}
				                      onSubmit={this.nextPage}/>}
				{page === 3 &&
				<WizardFormThirdPage previousPage={this.previousPage} initialValues={this.props.initialValues}
				                     onSubmit={onSubmit}/>}
				<label>{this.props.isFetching ? "Fetching data.." : "Fetched data successfully." }</label>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		initialValues: state.prefill.data,
		isFetching: state.prefill.fetching,
		hasFetched: state.prefill.fetched
	}
}

WizardForm = connect(
	mapStateToProps,
	{fetchData}
)(WizardForm);

WizardForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	initialValues: PropTypes.object
};

export default WizardForm;
