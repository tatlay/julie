import initial from "./initial";

const setInitial = () => initial;

const setExercise = (state, action) => ({...state, restTime : action.restTime, sets : action.sets, targetReps : action.targetReps, Workout : action.Workout, loaded: !state.loaded})

const setChangeLoad = (state) => ({...state, loaded : !state.loaded})

const setUserName = (state, action) => ({...state, userName : state.userName + action.userName})

const reducer = (state, action) => {
    switch (action.type) {

    	case "setExerciseDetails": return setExercise(state, action); 
    	case "setChangeLoad": return setChangeLoad(state); 
    	case "setUserName" : return setUserName(state, action)
        case "reset":
            return setInitial();
        default:
            return state;
    }
};

export default reducer;