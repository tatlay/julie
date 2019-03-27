import initial from "./initial";

const setInitial = () => initial;

const setExercise = (state, action) => ({...state, restTime : action.restTime, sets : action.sets, targetReps : action.targetReps, Workout : action.Workout})


const reducer = (state, action) => {
    switch (action.type) {
    	case "setExerciseDetails" : return setExercise(state, action); 
        case "reset":
            return setInitial();
        default:
            return state;
    }
};

export default reducer;