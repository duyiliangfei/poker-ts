import {Color, Mark} from "./enum";

export interface NormalCard extends Poker{
    color: Color
    mark: Mark
}

export interface JokerPoker extends Poker{
    type: 'Joker' | 'joker'
}

export interface Poker {
    getString(): string;
}


export type Pokers = Poker[];