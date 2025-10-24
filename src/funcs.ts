import {JokerPoker, NormalCard, Pokers} from "./types";
import {Color, Mark} from "./enum";
export function createPoker(): Pokers {
    const pokers: Pokers = [];
    const marks = Object.values(Mark);
    const colors= Object.values(Color);

    for(const mark of marks) {
        for(const color of colors) {
            const card:NormalCard = {
                color, mark,
                getString(): string {
                    return `${color}${mark}`
                }
            }
            pokers.push(card)
        }
    }
    const Joker: JokerPoker = {
        type: 'Joker',
        getString(): string {
            return 'Joker'
        }
    }
    const joker: JokerPoker =  {
        type: 'joker',
        getString(): string {
            return  'joker'
        }
    }

    pokers.push(joker, Joker)

    return pokers;
}
export function randomPoker(pokers: Pokers): Pokers {
    return pokers.sort((a, b) => Math.random() - 0.5)
}

export function print():void{
    const pokers = randomPoker(createPoker())
    let str = ''
    pokers.forEach((item,index) => {
        str+=item.getString() + '\t'
        if((index + 1) % 6 === 0){
            str+='\n'
        }
    })
    console.log(str)
}