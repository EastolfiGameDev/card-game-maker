import { Component } from "@angular/core";
import { Player } from './shared/models/base/player';
import { Deck } from './shared/models/base/deck';
import { DeckFactory } from './shared/factories/deck-factory';
import { CardFactory } from './shared/factories/card-factory';

@Component({
    selector: "cgm-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "card-game-maker";

    public player: Player;
    public decks: Deck[] = [];

    createPlayer(playerInput: any) {
        this.player = new Player(playerInput.value)
    }

    createGame() {
        
    }

    startGame() {
        // EventManager.subscribe()
    }

    setupBoard() {
        // const mainDeck = DeckFactory.create([
        //     ...CardFactory.create("WoodenChest", 10)
        // ], "Arcane Mage")
        const mainDeck = DeckFactory.createFromPrototype("Arcane Mage", "ARCANE_MAGE")

        /*const [ deckFront, deckLeft, deckRight ] = */
        this.decks = mainDeck.split(3);
    }

    drawCard(deck: Deck) {
        const card = deck.pickTopCard(this.player)

        this.player.hand.push(card)
    }
}
