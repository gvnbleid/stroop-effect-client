import React, { Component } from "react";
import { Stimulus } from '../models/stimulus';
import { StimulusForm } from "./StimulusForm";
import { BreakScreen } from "./BreakScreen";
import { Redirect } from "react-router";

interface State {
    stimuli: Stimulus[];
    testGroupNumber: number;
}

class TestScreen extends Component<{}, State> {
    state = { 
        stimuli: [
            {
                name: "zielony",
                color: "green"
            }
        ],
        testGroupNumber: 0
    };

    onClick = () => {
        this.setState(prevState => {
            prevState.stimuli.shift();

            return ({
                stimuli: [...prevState.stimuli]
            });
        });
    };

    onBreakEnd = () => {
        this.setState(prevState => {
            return ({
                stimuli: [
                    {
                        name: "zielony",
                        color: "green"
                    }
                ],
                testGroupNumber: prevState.testGroupNumber + 1
            });
        });
    };

    render() {
        if(this.state.stimuli.length > 0) {
            return (<StimulusForm stimulus={this.state.stimuli[0]} onAnswer={this.onClick}/>)
        } else {
            if(this.state.testGroupNumber == 2) {
                return (<Redirect to="/end"/>);
            }

            return (<BreakScreen onBreakEnd={this.onBreakEnd}/>)
        }
    }
}

export default TestScreen;