import { Deck } from '../models/base/deck';
import woodenChestStructure from "../structures/wooden-chest"
import { CardFactory } from "./card-factory";
import { Card } from "../models/base/card";

export class DeckFactory {
    static create(name: string, cards: Card[]): Deck {
        return new Deck(name, cards)
    }

    static createFromPrototype(name: string, proto: string): Deck {
        if  (proto === "ARCANE_MAGE") {
            return DeckFactory.create(name, [
                ...CardFactory.createFromStructure(woodenChestStructure, 10)
            ])
        }

        return new Deck("", []);
    }
}