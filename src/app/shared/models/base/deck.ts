import { EventManager } from '../../events/event-manager';
import { CardInteractionEvent } from '../../events/card-interaction-event';
import { Player } from './player';
import { Card } from "./card";

export class Deck {
    public name: string
    public cards: Card[]

    constructor(name: string, cards: Card[]) {
        this.name = name
        this.cards = cards
    }

    public getTopCard(): Card {
        return this.cards[0];
    }

    // public revealTopCard(): void {
    //     this.cards[0].revealed = true;
    // }
    // public hideTopCard(): void {
    //     this.cards[0].revealed = false;
    // }
    // public toggleTopCard(): void {
    //     this.cards[0].revealed ? this.hideTopCard() : this.revealTopCard()
    // }

    public pickTopCard(player: Player): Card {
        const card = this.cards.splice(0, 1)[0];
        
        let event = new CardInteractionEvent({ card, player })
        event.subType = "START"
        EventManager.getInstance().emit(event)

        return card;
    }

    // public interactTopCard(): void {
    //     this.getTopCard().interact()
    // }

    public split(subDecks: number): Deck[] {
        const totalCards = this.cards.length;
        const totalPerDeck = Math.floor(this.cards.length / subDecks) || 1;

        let decks: Deck[] = [];
        let deckCards: Card[] = [];

        for (let i = 0; i < totalCards; i++) {
            if (this.cards.length > 0) {
                const card = this.cards.splice(0, 1)[0]

                // Check there's room in the deck but we're not done yet
                if (deckCards.length >= totalPerDeck && this.cards.length > 0) {
                    // Add all the extracted cards to new deck and reset
                    decks.push(new Deck(`Deck #${decks.length + 1}`, deckCards))
                    deckCards = []
                }

                deckCards.push(card)
            }
        }

        // Add the last cards to a new deck and return
        decks.push(new Deck(`Deck #${decks.length + 1}`, deckCards))

        return decks;
    }
}