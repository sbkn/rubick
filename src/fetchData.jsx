import axios from "axios";

export default function fetchData() {
	return (dispatch) => {
		dispatch({type: "FETCH_DATA_START"});
		/*axios.post("http://rest.learncode.academy/api/bollocks/customer", {
		 firstName: "Fred",
		 lastName: "Flintstone"
		 })
		 .then(() => {*/
		axios.get("http://rest.learncode.academy/api/bollocks/customer")
			.then(response => {
				console.log("FETCHED DATA FROM SERVER:", response.data);
				dispatch({type: "FETCH_DATA_FINISH", data: response.data[0]});
			})
			.catch(error => {
				console.error(error);
			});
		/*})
		 .catch(error => {
		 console.error(error);
		 });*/
	}
};