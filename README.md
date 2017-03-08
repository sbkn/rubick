# rubick
Forms with **React** &amp; **Redux** using **redux-forms** and **react-router**.

Runnig this project:

    npm install
    npm start

####Things evaluated here:


##### Multi-page form
* Form has to be split into subforms displayed as separate views.

##### Pre-filling form
* Upon loading up the page in browser, an API call has to be made fetching data from server and inserting it into form fields.

##### Validation
* Fields should have a validation function assigned to them (also: "required" fields).
* Field level validation needs to be run onBlur.
* Each view needs to be validated upon user trying to get to next view.

##### Submitting
* Submitting the form needs to invoke a callback function, which could f.e. map form data to a request model.

##### Conditional Fields
* Fields displayed only if other field(s) have specific values. Upon hiding fields, according values need to be removed.

##### Date Picker
* Date Picker needs to be customizable: exclude specific dates, min & max date, formatting, localization, display 2 months at once.

##### Navigation Bar
* User needs to be able to jump between pages. Further navigation logic is optional.
* Routing using push-state API.

##### Format input values
* User input has to be formattable, so that values are stored formatted (e.g. input: 1.000 -> stored value: 1000).
* User input displayed in a separate form element needs to be formattable (e.g. stored value: 1000 -> displayed value: 1.000).

##### Dynamic fields
* User needs to be able to add new fields (field groups) dynamically to form by clicking a button (e.g. To-Do list -> add a to-do task).