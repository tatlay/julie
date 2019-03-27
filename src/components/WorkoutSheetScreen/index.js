import { connect } from "react-redux";
import WorkoutSheetScreen from "./WorkoutSheetScreen";

const mapStateToProps = (state) => ({
    exerciseFocus: state.exerciseFocus,
    workoutTimeMins: state.workoutTimeMins,
    restTime: state.restTime,
});

export default connect(
    mapStateToProps,
    null
)(WorkoutSheetScreen);
