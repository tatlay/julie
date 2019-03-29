import React, { Component } from "react";

import Loading from "../Loading";


class TimeMuscleScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			errMsg: "",
			muscleErr: "",
			goalErr: "",
			durationErr: "",

			chest : false,
			back : false,
			biceps : false,
			triceps : false,
			shoulders : false,
			legs : false,
			timeForWorkout : "",
			goal: "",
		} 

		this.handleMuscleChange = this.handleMuscleChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleGoalChange = this.handleGoalChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		
	}//end of constructor

	handleTimeChange(e) {
		this.setState({ timeForWorkout : +e.currentTarget.value >= 0 ? +e.currentTarget.value : 0})

	};


	handleMuscleChange(e) {
		switch (e.currentTarget.id) {
			case "Back" : 
			this.setState({ back : !this.state.back })
			break;
			case "Shoulders" : 
			this.setState({ shoulders : !this.state.shoulders })
			break;
			case "Biceps" : 
			this.setState({ biceps : !this.state.biceps })
			break;
			case "Triceps" : 
			this.setState({ triceps : !this.state.triceps })
			break;
			case "Chest" : 
			this.setState({ chest : !this.state.chest })
			break;
			case "Legs" : 
			this.setState({ legs : !this.state.legs })
			break;
			default :
			return null;
		}
	}

	handleGoalChange(e) {
		this.setState({ goal : e.currentTarget.value })
	}

	handleClick(){
		if(this.state.timeForWorkout <= 0) {
			this.setState({durationErr: "Enter workout duration. "});
		} else {
			this.setState({durationErr: ""});
		}
		if(!this.state.goal) {
			this.setState({goalErr: "Select a goal. "});
		} else {
			this.setState({goalErr: ""});
		}
		if(!this.state.chest && !this.state.back && !this.state.biceps && !this.state.triceps && !this.state.shoulders && !this.state.legs) {
			this.setState({muscleErr: "Select muscle group. "});
		} else {
			this.setState({muscleErr: ""});
		}

		if(this.state.timeForWorkout <= 0 || !this.state.goal || (!this.state.chest && !this.state.back && !this.state.biceps && !this.state.triceps && !this.state.shoulders && !this.state.legs)) {
			this.setState({errMsg: "Errors in form: "});
		} else {
			this.setState({errMsg: ""});
		}
		

		if((this.state.chest || this.state.back || this.state.biceps || this.state.triceps || this.state.shoulders || this.state.legs) && this.state.goal !== false &&  this.state.timeForWorkout > 0) {
			this.props.handleLoad();
			const {errMsg, muscleErr, goalErr, durationErr, ...newState} = this.state;
			this.props.onSubmit(newState);
		}
	}


	render() {

		return (

			<React.Fragment>
				<Loading>

					<h1 className="timemusclescreen__title">Workout with Julie</h1>

					<label className="timemusclescreen__workoutLabel" htmlFor="time">Workout Time</label>

						<input className="timemusclescreen_mins" onChange={ this.handleTimeChange } type="number" name="time" id="time" placeholder="mins" value={this.state.timeForWorkout}/>
			
					<form className="timemusclescreen__form">

				<div className="timemusclescreen_divide"></div>	

					<h3 className="timemusclescreen__goal">What is your goal for this workout?</h3>
						<div className="timemusclescreen__radio">
							<input onChange={ this.handleGoalChange } id="strength" type="radio" name="goal" value="strength" />

							<label>Strength</label>
						
							<input onChange={ this.handleGoalChange } id="size" type="radio" name="goal" value="size" />
							<label>Size</label>
						
							<input onChange={ this.handleGoalChange } id="endurance" type="radio" name="goal" value="endurance" />

							<label className="timemusclescreen__endurance">Endurance</label>
						</div>

					

				<div className="timemusclescreen_divide"></div>	

			<h3 className="timemusclescreen__areas">Which areas would you like to work out?</h3>

						<div className="timemusclescreen__checkbox">
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Back" checked={this.state.back} />
							<label htmlFor="Back">Back</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Shoulders" checked={this.state.shoulders} />
							<label htmlFor="Shoulders">Shoulders</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Biceps" checked={this.state.biceps} />
							<label htmlFor="Biceps">Biceps</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Triceps" checked={this.state.triceps} />
							<label htmlFor="Triceps">Triceps</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Chest" checked={this.state.chest} />
							<label htmlFor="Chest">Chest</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup"  id="Legs" checked={this.state.legs} />
							<label htmlFor="Legs">Legs</label>

						</div>
					</form>
					<p>{this.state.errMsg}  {this.state.durationErr}  {this.state.goalErr}  {this.state.muscleErr} </p>
					<button onClick={ this.handleClick }>Submit</button>
				</Loading>
			</React.Fragment>
		)
	}


} 

export default TimeMuscleScreen;
