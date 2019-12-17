import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { groupEnd } from "../texts";

interface Props {
    onBreakEnd: () => void;
}

export const BreakScreen: FunctionComponent<Props> = ({
    onBreakEnd
}) => {
    const [state, setState] = useState(120);

    useInterval(() => {
        setState(currState => currState - 1);
    }, 1000)

    function useInterval(callback: () => void, delay: number) {
        const savedCallback = useRef<() => void>();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                if(savedCallback.current != undefined) {
                    savedCallback.current();
                }
            }
            if(delay != null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [[delay]]);
    }

    

    const tryRenderNavLink = () => {
        if(state <= 0) {
            return (<NavLink className="buttons" to="/test" onClick={onBreakEnd}>DALEJ</NavLink>);
        } else {
            return (<div/>);
        }
    }

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