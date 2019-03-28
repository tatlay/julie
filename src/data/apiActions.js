import axios from "./axios";
import { exerciseDetails } from "./stateActions";
import dummyResponse from "./dummyResponse.json";
import { createExerciseArray } from "./logicFunctions";

export const getExercisePlan = (data) => (dispatch, getState) => {
	
	let mgroup = createExerciseArray(data);

	console.log(mgroup);
	console.log(data.timeForWorkout);
	console.log(data.goal);

	/*	

	// code below to be activated on API functionality
	axios.post("/workout", {
		categories: mgroup,
		timeForWorkout: data.timeForWorkout,
		goal: data.goal,
	})
		.then( response => exerciseDetails(dummyResponse)) //dispatching stateAction here.
		.catch( error => console.log(error)) */

		dispatch(exerciseDetails(dummyResponse));
}
