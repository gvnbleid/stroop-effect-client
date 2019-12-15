import React, { Component } from "react";
import { Button } from "@material-ui/core";

class InfoScreen extends Component {
    render() {
        return (
            <div>
                <div className="textContainer">
                    <p className="text">text</p>
                </div>
                <div className="buttonsContainer">
                    <Button className="buttons">DALEJ</Button>
                </div>
            </div>
        )
    }
}

export default InfoScreen;