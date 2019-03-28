export const createExerciseArray = (data) => {
	
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