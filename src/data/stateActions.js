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

export const setUserName = (userName) => {
	console.log(userName)
	return {
		type : "setUserName",
		userName,
	}
}