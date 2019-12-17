import React, { Component } from "react";
import { Stimulus } from '../models/stimulus';
import { Reactions } from "../models/reactions";
import { StimulusForm } from "./StimulusForm";
import { BreakScreen } from "./BreakScreen";
import { Redirect } from "react-router";
import { Stopwatch } from "ts-stopwatch";
import * as request from "request";
import { getSet } from "../requests";

interface State {
    stimuli: Stimulus[];
    testGroupNumber: number;
    response: boolean;
}

class TestScreen extends Component<{}, State> {
    state = { 
        stimuli: [{name: "żyrafa", color:"green"}],
        testGroupNumber: 0,
        response: true
    };

    stopwatch: Stopwatch = new Stopwatch();
    reactions: Reactions = {
        set_1: [],
        set_2: [],
        set_3: []
    };

    onClick = () => {
        this.stopwatch.slice();

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

        this.stopwatch.start(true);
    }

    loadNewSet = () => {
        getSet(this.state.testGroupNumber, this.loadNewSetCallback);
    };

    onBreakEnd = () => {
        this.loadNewSet();
    }

    saveReactions = () => {
        const slices = this.stopwatch.getCompletedSlices().map(slice => slice.duration);
        
        switch(this.state.testGroupNumber) {
            case 1:
                this.reactions.set_1 = slices;
            case 2:
                this.reactions.set_2 = slices;
            case 3:
                this.reactions.set_3 = slices;
        }
    }

    componentDidMount() {
        //console.log("Component did mount");
        this.loadNewSet();
    }

    render() {
        if(this.state.response) {
            console.log("Loading...");
            return (<div>Ładowanie...</div>);
        }

        // console.log("response is done");

        if(this.state.stimuli.length > 0) {
            return (<StimulusForm stimulus={this.state.stimuli[0]} onAnswer={this.onClick}/>)
        } else {
            if(this.state.testGroupNumber === 2) {
                return (<Redirect to="/end"/>);
            }

            this.saveReactions();
            return (<BreakScreen onBreakEnd={this.onBreakEnd}/>)
        }
    }
}

export default TestScreen;