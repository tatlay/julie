import { connect } from "react-redux";
import WorkoutSheetScreen from "./WorkoutSheetScreen";

const mapStateToProps = (state) => ({
    exerciseFocus: state.workoutFocus,
    workoutTimeMins: state.workoutTime,
    restTime: state.restTime,
});

export default connect(
    mapStateToProps,
    null
)(WorkoutSheetScreen);
