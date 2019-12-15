import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class InfoScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="text">info</p>
                </div>
                <div className="buttonsContainer">
                    <NavLink className="buttons" to="/instructions">DALEJ</NavLink>
                </div>
            </div>
        )
    }
}

export default InfoScreen;