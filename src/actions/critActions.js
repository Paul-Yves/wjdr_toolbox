import { randFromList } from '../data/diceBag';
import {critTable} from '../data/critTables';

const critValueToIdx = {
    1: [5, 5, 4, 4, 3, 3, 2, 2, 1, 1],
    2: [7, 6, 6, 5, 5, 4, 4, 3, 3, 2],
    3: [9, 8, 8, 7, 7, 6, 6, 5, 5, 4],
    4: [10, 9, 9, 8, 8, 7, 7, 6, 6, 5],
    5: [11, 10, 9, 9, 8, 8, 7, 7, 6, 6],
    6: [11, 10, 10, 9, 9, 8, 8, 7, 7, 6],
    7: [12, 11, 10, 10, 9, 9, 8, 8, 7, 7],
    8: [13, 12, 11, 10, 10, 9, 9, 8, 8, 7],
    9: [14, 13, 12, 11, 10, 10, 9, 9, 8, 8],
    10: [15, 14, 13, 12, 11, 10, 10, 9, 9, 8]
}
const localizeWound = () => {
    const d100 = Math.floor(100*Math.random()+1);
    if(d100 <= 15){
        return "head";
    } else if (d100 <= 35){
        return "arm_right";
    } else if (d100 <= 55){
        return "arm_left";
    } else if (d100 <= 80){
        return "body";
    } else if (d100 <= 35){
        return "leg_right";
    }
    return "leg_left";
}
export const rollCrit = (critValue, source) => {
    const critIdx = randFromList(critValueToIdx[critValue]);
    const loc = localizeWound();
    const realLoc = loc.split("_")[0];
    const table = critTable[source][realLoc].map((critText, idx, locTable)=>{
        const normIdx = idx + 1;
        const currentCrit = normIdx === critIdx || (normIdx === locTable.length && critIdx>locTable.length);
        return {text: critText, currentCrit};
    })
    return {
        type: "rollCrit",
        localisation: loc,
        table
    }
}