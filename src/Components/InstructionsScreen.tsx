import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { instructions } from "../texts";


class InstructionsScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="text">{instructions()}</p>
                </div>
                <div className="buttonsContainer">
                    <NavLink className="buttons" to="/test">DALEJ</NavLink>
                </div>
            </div>
        )
    }
}

export default InstructionsScreen;