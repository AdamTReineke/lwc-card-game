export type CardSuit = 'S' | 'C' | 'D' | 'H';
export type CardValue =
    | 'A'
    | 'K'
    | 'Q'
    | 'J'
    | 'T'
    | '9'
    | '8'
    | '7'
    | '6'
    | '5'
    | '4'
    | '3'
    | '2';
export type SingleCard = { CardSuit: CardSuit; CardValue: CardValue };
