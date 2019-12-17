import * as request from 'request';
import { Stimulus } from "./models/stimulus";

export function getSet(index: number, callback: (req: any, res: any) => void) {
    console.log("getSet");
    const options = {
      headers: {'Content-Type' : 'application/json'},
    }

    request.get(`https://stroop-effect.herokuapp.com/stimuli/getPackage?field=${index}`, options, callback);
};