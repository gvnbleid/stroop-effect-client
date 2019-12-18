import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { instructions } from "../texts";
import example from "../example.png";


class InstructionsScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="instructionsText">{instructions()}</p>
                    <img src={example} alt="Example"/>
                </div>
                <div className="buttonsContainer">
                    <NavLink className="instructionsButton" to="/test">DALEJ</NavLink>
                </div>
            </div>
        )
    }
}

export default InstructionsScreen;