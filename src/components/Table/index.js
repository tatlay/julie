import { connect } from "react-redux";
import Table from "./Table";

const mapStateToProps = ({ sets, targetReps, Workout }) => ({
    sets,
    targetReps,
    Workout,
});

export default connect(
    mapStateToProps,
    null
)(Table);
