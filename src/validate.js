export const validate = values => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = "Required"
	}
	if (!values.lastName) {
		errors.lastName = "Required"
	}
	if (!values.email) {
		errors.email = "Required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address"
	}
	if (!values.sex) {
		errors.sex = "Required"
	}
	if (!values.favoriteColor) {
		errors.favoriteColor = "Required"
	}
	return errors
};

const minLength = (min) => (value) => value && value.length < min ? "Must be at least 2 characters long" : undefined;
export const minLength2 = minLength(2);
