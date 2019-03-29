import { connect } from "react-redux";
import Loading from "./Loading";
// import { getGameData } from "../../data/API_actions";

const mapStateToProps = ({ loaded }) => ({
    loaded
});

const mapDispatchToProps = (dispatch) => ({
    // handleLoad: () => dispatch(getExercisePlan())
    handleLoad: () => console.log("loading")
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);
