import React, { Component } from "react";
import InfoScreen from "./Components/InfoScreen";
import InstructionsScreen from "./Components/InstructionsScreen";
import TestScreen from "./Components/TestScreen";
import EndScreen from "./Components/EndScreen";
import { Route, HashRouter} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Badanie</h1>
                    <hr/>

                    <Route path="/" component={InfoScreen}/>
                    <Route path="/instructions" component={InstructionsScreen}/>
                    <Route path="/test" component={TestScreen}/>
                    <Route path="/end" component={EndScreen}/>
                </div>
            </HashRouter>
        )
    }
}

export default Main;