import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import { Stimulus } from '../models/stimulus';

interface Props {
    stimulus: Stimulus;
    onAnswer: () => void;
}

export const StimulusForm: FunctionComponent<Props> = ({
    stimulus,
    onAnswer
}) => {
    return (
        <div>
            <div className="textContainer">
                <p className="text">{stimulus.name}</p>
            </div>
            <div className="buttonsContainer">
                <table className="buttons">
                    <tbody>
                        <tr>
                            <td><Button className="button" variant="contained" onClick={onAnswer}>czerwony</Button></td>
                            <td><Button className="button" variant="contained" onClick={onAnswer}>zielony</Button></td>
                            </tr>
                        <tr>
                            <td><Button className="button" variant="contained" onClick={onAnswer}>niebieski</Button></td>
                            <td><Button className="button" variant="contained" onClick={onAnswer}>żółty</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}