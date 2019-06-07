import { InteractionStructure } from "../models/base/structure";
import { CardInteractionEvent } from "../events/card-interaction-event";
import { EventManager } from "../events/event-manager";
import { Card } from "../models/base/card";

export class /*Card*/Interaction {
    label: string
    requirements: Requirement[]

    card: Card

    constructor(card: Card) {
        this.card = card
    }

    interact() {
        this.startInteraction()

        this.doInteraction()
        .then(() => {
            this.finishInteraction()
        })
        .catch(error => {

        })
    }
    startInteraction() {
        let event = new CardInteractionEvent({ card: this.card, player: null })
        event.subType = "START"
        EventManager.getInstance().emit(event)
    }
    doInteraction: () => Promise<any>
    finishInteraction() {
        let event = new CardInteractionEvent({ card: this.card, player: null })
        event.subType = "END"
        EventManager.getInstance().emit(event)
    }
}

export class Requirement {
    resource: string
    amount: number
}

export class /*Card*/InteractionFactory {
    static create(card: Card, data: InteractionStructure): Interaction {
        let interaction = new Interaction(card);

        if (data.type === "OPEN") {
            interaction.label = "Open"

            if (data.action === "ROLL_A_DIE") {
                interaction.label += ": Roll a die"
                interaction.startInteraction = () => {
                    return new Promise((resolve, reject) => {
                        console.log("Rolling then open");
                        resolve()
                    })
                }
            } else if (data.action === "NONE") {
                interaction.startInteraction = () => {
                    return new Promise((resolve, reject) => {
                        console.log("Just open");
                        resolve()
                    })
                }
            }
        }

        if (data.requirements) {
            interaction.requirements = data.requirements;
        }

        return interaction;
    }
}