import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { groupEnd } from "../texts";

interface Props {
    onBreakEnd: () => void;
}

export const BreakScreen: FunctionComponent<Props> = ({
    onBreakEnd
}) => {
    return (
        <div>
            <div className="textContainer">
                <p className="text">{groupEnd()}</p>
            </div>
            <div className="buttonsContainer">
                <NavLink className="buttons" to="/test" onClick={onBreakEnd}>DALEJ</NavLink>
            </div>
        </div>
    )
}