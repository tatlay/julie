import axios from "./axios";
import { exerciseDetails } from "./stateActions";
import { createExerciseArray } from "./logicFunctions";
import history from "../data/history";

export const getExercisePlan = (data) => (dispatch, getState) => {

	let mgroup = createExerciseArray(data);

	axios.post("/workoutplans", {
		categories: mgroup,
		time: data.timeForWorkout,
		goal: data.goal,


	}).then( response => {
		dispatch(exerciseDetails(response.data))

		history.push("/workout-sheet-screen")

	}).catch( error => console.log(error))

}
