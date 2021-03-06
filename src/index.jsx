// Application entrypoint.

require("../styles/application.scss");

import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.jsx";

ReactDOM.render(<App />, document.getElementById("react-root"));
