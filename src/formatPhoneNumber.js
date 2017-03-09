const formatPhoneNumber = (value) => {

	if (!value) return "";
	value = value.replace(/-/g, "");
	return `(${value.substr(0, 3)})${value.substr(3)}`;
};

export default formatPhoneNumber;