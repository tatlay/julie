import axios from "./axios";
import { exerciseDetails } from "./stateActions";
import dummyResponse from "./dummyResponse.json";

//import thunks

const createExerciseArray = (data) => {
	const backStr = data.back ? "back" : null;
	const bicepsStr = data.biceps ? "biceps" : null;
	const chestStr = data.chest ? "chest" : null;
	const legsStr = data.legs ? "legs" : null;
	const shouldersStr = data.shoulders ? "shoulders" : null;
	const tricepsStr = data.triceps ? "triceps" : null;
	const muscleGroups = [backStr, bicepsStr, chestStr, legsStr, shouldersStr, tricepsStr].reduce( (acc, val) => {
		if (val !== null) {
			acc.push(val);
		}
		return acc;
	}, []);
	return 	muscleGroups;
}



export const getExercisePlan = (data) => (dispatch, getState) => {
	/*
	let mgroup = createExerciseArray(data);

	console.log(mgroup);
	console.log(data.timeForWorkout);
	console.log(data.goal);

	
	

	// make an api call sending off the data (in the format that the api is expecting)
	axios.post("/workout", {
		categories: mgroup,
		timeForWorkout: data.timeForWorkout,
		goal: data.goal,
	})
		.then( response => exerciseDetails(dummyResponse)) //dispatching stateAction here.
		.catch( error => console.log(error)) */

		dispatch(exerciseDetails(dummyResponse));


	// on success, pass the response to the state (exercise)
	// on failure notify the user that something is wrong (console.log....error message system)
}

