import React, { Component, Fragment } from "react";
import "./Loading.css";

class Loading extends Component {
    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { children, loaded } = this.props;
        return loaded ? (
            children
        ) : (
            <Fragment>
                <div className="lds-heart"><div></div></div>
                <p>
                    <h3 className="loading-message">Creating your Workout&hellip;</h3>
                </p>
            </Fragment>
        );
    }
}

export default Loading;
