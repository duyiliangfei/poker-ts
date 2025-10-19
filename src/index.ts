import {Color, Mark} from "./enum";
import {Pokers} from "./types";

function createPoker(): Pokers {
    const pokers: Pokers = [];
    const marks = Object.values(Mark);
    const colors= Object.values(Color);

    for(const mark of marks) {
        for(const color of colors) {
            pokers.push({
                color, mark,
            })
        }
    }
    return pokers;
}
const pokers: Pokers = createPoker();
function randomPoker(pokers: Pokers): Pokers {
    return pokers.sort((a, b) => Math.random() - 0.5)
}
console.log(randomPoker(pokers));