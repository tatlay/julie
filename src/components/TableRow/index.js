import { connect } from "react-redux";
import TableRow from "./TableRow";

const mapStateToProps = ({ sets, targetReps, Workout }) => ({
    sets,
    targetReps,
    Workout,
});

export default connect(
    mapStateToProps,
    null
)(TableRow);
