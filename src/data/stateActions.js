export const exerciseDetails = ({restTime, sets, targetReps, Workout}) => {
	return {
		type : "setExerciseDetails",
		restTime, 
		sets,
		targetReps,
		Workout
	}
}

export const changeLoad = () => {
	return {
		type : "setChangeLoad"
	}
}