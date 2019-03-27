export const exerciseDetails = ({restTime, sets, targetReps, Workout}) => {
	return {
		type : "setExerciseDetails",
		restTime, 
		sets,
		targetReps,
		Workout
	}
}

