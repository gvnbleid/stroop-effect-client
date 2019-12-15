import React, { Component } from "react";
import InfoScreen from "./Components/InfoScreen";
import { Route, HashRouter} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Badanie</h1>
                    <hr/>

                    <Route path="/" component={InfoScreen}/>
                </div>
            </HashRouter>
        )
    }
}

export default Main;