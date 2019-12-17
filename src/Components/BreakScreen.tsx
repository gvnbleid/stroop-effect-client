import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { Stopwatch } from "ts-stopwatch";
import { groupEnd } from "../texts";

interface Props {
    onBreakEnd: () => void;
}

export const BreakScreen: FunctionComponent<Props> = ({
    onBreakEnd
}) => {

    const [state, setState] = useState(120);

    const callback = () => {
        setState(state - 1);
        if(state === 0) {
            clearInterval(interval);
        }
    }

    const tryRenderNavLink = () => {
        if(state <= 0) {
            return (<NavLink className="buttons" to="/test" onClick={onBreakEnd}>DALEJ</NavLink>);
        } else {
            return (<div/>);
        }
    }

    const interval = setInterval(callback, 1000);

    return (
        <div>
            <div className="textContainer">
                <p className="text">{groupEnd().replace("##", state.toString())}</p>
            </div>
            <div className="buttonsContainer">
                {tryRenderNavLink()}
            </div>
        </div>
    )
}