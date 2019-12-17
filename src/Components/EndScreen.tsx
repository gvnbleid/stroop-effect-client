import React, { Component } from "react";
import { end } from "../texts";

class EndScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="text">{end()}</p>
                </div>
                <div className="buttonsContainer">
                    
                </div>
            </div>
        )
    }
}

export default EndScreen;