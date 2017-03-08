const purgeFieldValues = (dispatch, fieldArray) => {
	dispatch({
		type: "CLEAR_CONDITIONAL_FIELDS",
		payload: fieldArray
	});
};

export default purgeFieldValues;