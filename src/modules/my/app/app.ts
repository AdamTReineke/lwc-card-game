import { LightningElement, track } from 'lwc';
// eslint-disable-next-line no-unused-vars
import { SingleCard } from '../../../types/types';

export default class App extends LightningElement {
    @track
    drawnCards = [];

    constructor() {
        super();

        this.template.addEventListener('draw', (e: CustomEvent<SingleCard>) => {
            console.log(this.drawnCards);
            this.drawnCards.push({
                index: this.drawnCards.length,
                suit: e.detail.CardSuit,
                value: e.detail.CardValue
            });
        });

        this.template.addEventListener('shuffle', () => {
            this.drawnCards.length = 0;
        });

        this.template.addEventListener('burn', () => {
            this.drawnCards.push({
                index: this.drawnCards.length,
                suit: '',
                value: ''
            });
        });
    }
}
