import * as _ from "lodash";

import { WoodenChest } from '../models/wooden-chest';
import { Card } from "../models/base/card";
import { CardImpl } from "../models/base/card.impl";
import { InteractionFactory } from "./interaction.factory";
import { Structure, InteractionStructure } from "../models/base/structure";

export class CardFactory {
    // static create(cardName: string, amount: number): Card[] {
    //     let cards = []

    //     for (let i = 0; i < amount; i++) {
    //         cards.push(CardFactory.__createCardInstance(cardName))
    //     }
    
    //     return cards
    // }
    
    // static __createCardInstance(cardName: string): Card {
        //     if (cardName === "WoodenChest") {
            //         return new WoodenChest()
            //     }
            // }
            
    static createFromStructure(structure: Structure, amount: number): Card[] {
        let cards = []

        for (let i = 0; i < amount; i++) {
            let card = new CardImpl()
            
            card.name = structure.name

            if (structure.interactions && structure.interactions.length) {
                card.interactions = []
                structure.interactions.forEach((interaction: InteractionStructure) => {
                    card.interactions.push(InteractionFactory.create(card, interaction))
                });
    
            }

            cards.push(card)
        }

        return cards
    }
}












// deckFront.revealTopCard()
// deckLeft.revealTopCard()
// deckRight.revealTopCard()

// const card = deckFront.pickTopCard()
// card.interact()
// .then(() => card.discard())