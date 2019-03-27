import axios from "./axios";

//import thunks


export const getExercisePlan = data => (dispatch, getState) => {
	
	console.log(data);	
	// make an api call sending off the data (in the format that the api is expecting)
	axios.get("/activity", )
		.then( response => console.log(response))
		.catch( error => console.log(error))


	// on success, pass the response to the state (exercise)
	// on failure notify the user that something is wrong (console.log....error message system)
}