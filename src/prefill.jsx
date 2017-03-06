const initialState = {
	data: {},
	fetching: false,
	fetched: false,
	error: null
};

const prefillReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_DATA_START":
			return {
				...state,
				fetching: true
			};
		case "FETCH_DATA_FINISH":
			return {
				...state,
				data: action.data,
				fetching: false,
				fetched: true
			};
		default:
			return state
	}
};

export default prefillReducer;
