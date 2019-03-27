import React, { Component } from "react";

class TimeMuscleScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			chest : false,
			back : false,
			biceps : false,
			triceps : false,
			shoulders : false,
			legs : false,
			timeForWorkout : 0,
			goal: "",
		} 

		this.handleMuscleChange = this.handleMuscleChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		
	}//end of constructor

	handleTimeChange(e) {
		this.setState({ timeForWorkout : +e.currentTarget.value })

	};



	handleMuscleChange(e) {
		e.preventDefault();
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


	render() {

		return (

			<React.Fragment>

				<h1>Workout with Julie</h1>

				<form>

					<h3>How much time do you have for your workout?</h3>

					<div>
						<input onChange={ this.handleTimeChange } type="number" name="time" id="time"  />
					</div>
				<h3>What is your goal for this workout?</h3>
					<div>
						<input id="strength" type="radio" name="goal" value="strength" />
						<label>Strength</label>
					
						<input id="size" type="radio" name="goal" value="size" />
						<label>Size</label>
					
						<input id="endurance" type="radio" name="goal" value="endurance" />
						<label>Endurance</label>
					</div>


					<h3>Which areas would you like to work out?</h3>

					<div>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Back" />
						<label for="Back">Back</label>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Shoulders" />
						<label for="Shoulders">Shoulders</label>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Biceps" />
						<label for="Biceps">Biceps</label>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Triceps" />
						<label for="Triceps">Triceps</label>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Chest" />
						<label for="Chest">Chest</label>
						<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup"  id="Legs" />
						<label for="Legs">Legs</label>
					</div>
				</form>

				<button 
					onClick={ () => this.props.onSubmit(this.state) }>

				Submit</button> 

			</React.Fragment>
		)
	}
	//submit button

} 

export default TimeMuscleScreen;
