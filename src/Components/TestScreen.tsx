import React, { Component } from "react";
import { Stimulus } from '../models/stimulus';
import { StimulusForm } from "./StimulusForm";
import { BreakScreen } from "./BreakScreen";
import { Redirect } from "react-router";
import * as request from "request";
import { getSet } from "../requests";

interface State {
    stimuli: Stimulus[];
    testGroupNumber: number;
    response: boolean;
}

class TestScreen extends Component<{}, State> {
    state = { 
        stimuli: [],
        testGroupNumber: 0,
        response: true
    };

    onClick = () => {
        this.setState(prevState => {
            prevState.stimuli.shift();

            return ({
                stimuli: [...prevState.stimuli]
            });
        });
    };

    loadNewSetCallback = (req: any, res: any) => {
        console.log(res.body);
        const stimuli = JSON.parse(res.body);

        this.setState(prevState => {
            return({
                stimuli: stimuli,
                testGroupNumber: prevState.testGroupNumber + 1,
                response: false
            });
        })
    }

    loadNewSet = () => {
        getSet(this.state.testGroupNumber, this.loadNewSetCallback);
    };

    onBreakEnd = () => {
        this.loadNewSet();
    }

    componentDidMount() {
        console.log("Component did mount");
        this.loadNewSet();
    }

    render() {
        if(this.state.response) {
            console.log("Loading...");
            return (<div>Ładowanie...</div>);
        }

        console.log("response is done");

        if(this.state.stimuli.length > 0) {
            return (<StimulusForm stimulus={this.state.stimuli[0]} onAnswer={this.onClick}/>)
        } else {
            if(this.state.testGroupNumber === 2) {
                return (<Redirect to="/end"/>);
            }

            return (<BreakScreen onBreakEnd={this.onBreakEnd}/>)
        }
    }
}

export default TestScreen;