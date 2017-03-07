import React, {Component, PropTypes} from "react"
import WizardFormFirstPage from "./WizardFormFirstPage.jsx"
import WizardFormSecondPage from "./WizardFormSecondPage.jsx"
import WizardFormThirdPage from "./WizardFormThirdPage.jsx"
import WizardFormSummaryPage from "./WizardFormSummaryPage.jsx"
import {connect} from "react-redux";
import fetchData from "../actions/fetchData.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "./Footer.jsx";

class WizardForm extends Component {

	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.goToPage = this.goToPage.bind(this);
		this.state = {
			page: props.currentPage
		};
	}

	componentWillMount() {
		if (!this.props.hasFetched)
			this.props.fetchData();
	}

	nextPage() {
		this.setState({page: this.state.page + 1})
	}

	previousPage() {
		this.setState({page: this.state.page - 1})
	}

	goToPage(pageNumber) {
		console.log("Will not validate anything! THIS IS A MOCK!");
		this.setState({page: pageNumber});
	}

	render() {

		const {onSubmit, initialValues, isFetching} = this.props;
		const {page} = this.state;

		return (
			<div>
				<NavBar goToPage={this.goToPage}/>
				{page === 0 &&
				<WizardFormFirstPage onSubmit={this.nextPage} initialValues={initialValues} isFetching={isFetching}/>}
				{page === 1 &&
				<WizardFormSecondPage previousPage={this.previousPage}
									  initialValues={initialValues}
									  onSubmit={this.nextPage}/>}
				{page === 2 &&
				<WizardFormThirdPage previousPage={this.previousPage}
									 initialValues={initialValues}
									 onSubmit={this.nextPage}/>}
				{page === 3 &&
				<WizardFormSummaryPage previousPage={this.previousPage}
									   initialValues={initialValues}
									   onSubmit={onSubmit}/>}
				<Footer goToPage={this.goToPage}/>
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
	currentPage: PropTypes.number
};

export default WizardForm;
