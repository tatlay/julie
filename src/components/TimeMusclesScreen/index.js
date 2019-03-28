import { connect } from "react-redux";
import TimeMusclesScreen from "./TimeMusclesScreen";
import { getExercisePlan } from "../../data/apiActions";


const mapDispatchToProps = (dispatch) => ({
	onSOmething: data => dispatch(antheraction(data)),
	onSubmit: data => dispatch(getExercisePlan(data))
})





export default connect(
    null,
    mapDispatchToProps
)(TimeMusclesScreen);
