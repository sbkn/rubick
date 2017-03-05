const initialState = {
	data: {},
	fetching: false,
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
				fetching: false
			};
		default:
			return state
	}
};

export default prefillReducer;
