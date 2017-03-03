import React, {Component} from "react";
import WizardForm from "./WizardForm.jsx";
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
	// ... your other reducers here ...
	form: formReducer     // <---- Mounted at 'form'
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);


class App extends Component {
  render() {
    return (
		<Provider store={ store }>
	  <WizardForm onSubmit={(data)=>{console.log(data);}}/>
		</Provider>
    );
  }
}
export default App;
