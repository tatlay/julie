import initial from "./initial";

const setInitial = () => initial;

const setExercise = (state, action) => ({...state, restTime : action.restTime, sets : action.sets, targetReps : action.targetReps, Workout : action.Workout, loaded: !state.loaded})


const setChangeLoad = (state) => ({...state, loaded : !state.loaded})

const reducer = (state, action) => {
    switch (action.type) {
    	case "setExerciseDetails": return setExercise(state, action); 
    	case "setChangeLoad": return setChangeLoad(state); 
        case "reset":
            return setInitial();
        default:
            return state;
    }
};

export default reducer;