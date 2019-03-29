import { connect } from "react-redux";
import TimeMusclesScreen from "./TimeMusclesScreen";
import { getExercisePlan } from "../../data/apiActions";
import { changeLoad } from "../../data/stateActions";


const mapDispatchToProps = (dispatch) => ({
	handleLoad : () => dispatch(changeLoad()),
	onSubmit: data => dispatch(getExercisePlan(data))
})

export default connect(
    null,
    mapDispatchToProps
)(TimeMusclesScreen);
