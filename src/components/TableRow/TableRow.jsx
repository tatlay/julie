import React, {Component, Fragment} from "react";

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = { sets: this.props.sets, targetReps: this.props.targetReps, Workout: this.props.Workout };

        this.handleCompRepsChange = this.handleCompRepsChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    };

    handleCompRepsChange(e, i) {
        this.setState({ Workout: this.state.Workout.map((exercise, j) => {
            if (i === j) {
                exercise.completedReps = e.currentTarget.value
            }
            return exercise;
        })});
    }

    handleWeightChange(e, i) {
        this.setState({ Workout: this.state.Workout.map((exercise, j) => {
            if (i === j) {
                exercise.weight = e.currentTarget.value
            }
            return exercise;
        })});
    }
    
    handleCheckboxChange(e, i) {
        this.setState({ Workout: this.state.Workout.map((exercise, j) => {
            if (i === j) {
                // console.log(exercise.completed)
                exercise.completed = !exercise.completed
            }
            return exercise;
        })});
    }

    render() {
        let { sets, targetReps, Workout } = this.state;
        return(
            <Fragment>
                {Workout.map((exercise, i) => (
                    <tr key={i}>
                        <td>{exercise.exerciseName}</td>
                        <td>{sets}</td>
                        <td>{targetReps}</td>
                        <td><input type="number" value={exercise.completedReps} onChange={(e) => this.handleCompRepsChange(e,i)}/></td>
                        <td><input type="number" value={exercise.weight} onChange={(e) => this.handleWeightChange(e,i)}/></td>
                        <td><input checked={exercise.completed} type="checkbox" onChange={(e) => this.handleCheckboxChange(e,i)}/></td>
                    </tr>
                ))}
            </Fragment>
        );
    };
};

export default TableRow;