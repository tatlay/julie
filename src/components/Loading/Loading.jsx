import React, { Component } from "react";
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
            <div className="lds-heart"><div></div></div>
        );
    }
}

export default Loading;
