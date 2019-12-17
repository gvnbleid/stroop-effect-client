import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import { Stimulus } from '../models/stimulus';

interface Props {
    stimulus: Stimulus;
    onAnswer: (id: number, color: string) => void;
}

export const StimulusForm: FunctionComponent<Props> = ({
    stimulus,
    onAnswer
}) => {
    const style = (color: string) => {
        switch(color) {
            case "blue":
                return (<p className="stimulusTextBlue">{stimulus.name}</p>);
            case "green":
                return (<p className="stimulusTextGreen">{stimulus.name}</p>);
            case "red":
                return (<p className="stimulusTextRed">{stimulus.name}</p>);
            case "yellow":
                return (<p className="stimulusTextYellow">{stimulus.name}</p>);
        }
    }

    return (
        <div>
            <div className="textContainer">
                {style(stimulus.color)}
            </div>
            <div className="buttonsContainer">
                <table className="buttons">
                    <tbody>
                        <tr>
                            <td><Button className="button" variant="contained" onClick={() => onAnswer(0, stimulus.color)}>czerwony</Button></td>
                            <td><Button className="button" variant="contained" onClick={() => onAnswer(1, stimulus.color)}>zielony</Button></td>
                            </tr>
                        <tr>
                            <td><Button className="button" variant="contained" onClick={() => onAnswer(2, stimulus.color)}>niebieski</Button></td>
                            <td><Button className="button" variant="contained" onClick={() => onAnswer(3, stimulus.color)}>żółty</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}