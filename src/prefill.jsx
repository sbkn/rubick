const prefillReducer = (state = {}, action) => {
	switch (action.type) {
		case "FETCH_DATA_START":
			return {
				data: {},
				status: "FETCHING"
			};
		case "FETCH_DATA_FINISH":
			return {
				data: action.data,
				status: "SUCCESS"
			};
		default:
			return state
	}
};

export default prefillReducer;
