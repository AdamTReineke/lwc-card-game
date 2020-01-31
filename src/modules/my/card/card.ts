import { LightningElement, api } from 'lwc';
// eslint-disable-next-line no-unused-vars
import { CardSuit, CardValue } from '../../../types/types';

export default class Card extends LightningElement {
    @api
    suit: CardSuit;

    @api
    value: CardValue;

    @api
    get color() {
        switch (this.suit) {
            case 'H':
            case 'D':
                return 'red';
            case 'S':
            case 'C':
                return 'black';
            default:
                return 'back';
        }
    }

    @api
    get fancySuit() {
        switch (this.suit) {
            case 'S':
                return '♠'; // black spade suit
            case 'C':
                return '♣'; // black club suit
            case 'D':
                return '♦'; // black diamond suit
            case 'H':
                return '♥'; // black heart suit
            default:
                return '';
        }
    }

    @api
    get fancyValue() {
        switch (this.value) {
            case 'T':
                return '10';
            default:
                return this.value;
        }
    }
}
