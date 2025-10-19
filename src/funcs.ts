import {Pokers} from "./types";
import {Color, Mark} from "./enum";
export function createPoker(): Pokers {
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
export function randomPoker(pokers: Pokers): Pokers {
    return pokers.sort((a, b) => Math.random() - 0.5)
}