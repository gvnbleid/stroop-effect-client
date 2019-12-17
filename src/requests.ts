import * as request from 'request';
import { Stimulus } from "./models/stimulus";
import { Reactions } from './models/reactions';

export function getSet(index: number, callback: (req: any, res: any) => void) {
    console.log("getSet");
    const options = {
      headers: {'Content-Type' : 'application/json'},
    }

    request.get(`https://stroop-effect.herokuapp.com/stimuli/getPackage?field=${index}`, options, callback);
};

export function getOrder() {
    let order: number[] = [];
    request.get(`https://stroop-effect.herokuapp.com/stimuli/getOrder`, (req: any, res: any) => {
        if(res.body == "increasing") {
            order = [0, 1, 2];
        } else {
            order = [2, 1, 0];
        }
    });

    return order;
}

export function saveResults(reactions: Reactions, email: string | null) {
    const jsonData = {
        set_1: reactions.set_1,
        set_2: reactions.set_2,
        set_3: reactions.set_3,
        email: email
    }
  
    const stringified = JSON.stringify(jsonData);
    console.log(stringified);

    const options = {
        body: stringified,
        headers: {'Content-Type' : 'application/json'},
    }

    request.post('https://stroop-effect.herokuapp.com/answers/addUserData', options);
}