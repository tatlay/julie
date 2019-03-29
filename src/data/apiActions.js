import axios from "./axios";
import { exerciseDetails } from "./stateActions";
import dummyResponse from "./dummyResponse.json";
import { createExerciseArray } from "./logicFunctions";
import history from "../data/history";

export const getExercisePlan = (data) => (dispatch, getState) => {
	
	let mgroup = createExerciseArray(data);

	console.log(data);
	dispatch(exerciseDetails(dummyResponse))
/*

	axios.post("/workoutplans", {
		categories: mgroup,
		timeForWorkout: data.timeForWorkout,
		goal: data.goal,
	
		
	}).then( response => {

		dispatch(exerciseDetails(dummyResponse))
		history.push("/workout-sheet-screen");

	}).catch( error => console.log(error)) 

*/
}
