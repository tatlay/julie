import { connect } from "react-redux";
import TimeMusclesScreen from "./TimeMusclesScreen";
import { getExercisePlan } from "../../data/apiActions";


const mapDispatchToProps = (dispatch) => ({
	handleLoad : () => dispatch()
	onSubmit: data => dispatch(getExercisePlan(data))
})

export default connect(
    null,
    mapDispatchToProps
)(TimeMusclesScreen);
