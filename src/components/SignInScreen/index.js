import { connect } from "react-redux";
import SignInScreen from "./SignInScreen";
import { setUserName } from "../../data/stateActions";

const mapDispatchToProps = (dispatch) => ({
	onSubmit: data => dispatch(setUserName(data)) 
})



export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);
