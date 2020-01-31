import { LightningElement, api, track } from 'lwc';
// eslint-disable-next-line no-unused-vars
import { CardSuit, CardValue, SingleCard } from '../../../types/types';

export default class Deck extends LightningElement {
    @track
    private deck: SingleCard[];

    @api
    get cardsLeft(): number {
        return this.deck.length;
    }

    constructor() {
        super();

        this.makeNewDeck();
    }

    handleDraw() {
        if (this.deck.length === 0) {
            return;
        }
        const topCard = this.deck.pop();

        const event = new CustomEvent<SingleCard>('draw', {
            detail: {
                CardSuit: topCard.CardSuit,
                CardValue: topCard.CardValue
            },
            bubbles: true
        });

        this.dispatchEvent(event);
    }

    handleBurn() {
        if (this.deck.length === 0) {
            return;
        }

        this.deck.pop();
        const event = new CustomEvent<void>('burn', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }

    shuffleClick() {
        this.makeNewDeck();
        this.shuffleDeck();
    }

    private makeNewDeck() {
        const suits: CardSuit[] = ['S', 'C', 'D', 'H'];
        const values: CardValue[] = [
            'A',
            'K',
            'Q',
            'J',
            'T',
            '9',
            '8',
            '7',
            '6',
            '5',
            '4',
            '3',
            '2'
        ];
        this.deck = [];

        for (let suit of suits) {
            for (let value of values) {
                this.deck.push({ CardSuit: suit, CardValue: value });
            }
        }
    }

    private shuffleDeck() {
        const shuffleEvent = new CustomEvent<void>('shuffle', {
            bubbles: true
        });
        this.dispatchEvent(shuffleEvent);

        for (let times = 0; times < 100; times++) {
            for (let i = 0; i < 52; i++) {
                const indexToSwapIn = i + Math.floor(Math.random() * (52 - i));
                const temp = this.deck[i];
                this.deck[i] = this.deck[indexToSwapIn];
                this.deck[indexToSwapIn] = temp;
            }
        }
    }
}
