// import { Chest } from './base/chest';
import { CardInteractionEvent } from '../events/card-interaction-event';

export class WoodenChest /*extends Chest*/ {
    public state: any;

    public interactionOptions = [{
        label: "Don't Open",
        onInteract: () => {
            // skip
        }
    }, {
        label: "Open: Roll a Die",
        onInteract: () => {
            // skip
        }
    }, {
        label: "Open",
        requirements: [{
            player: {
                resource: "LEVEL",
                amount: 2
            }
        }],
        onInteract: () => {
            // skip
        }
    }]

    // protected onCardInteraction(event: CardInteractionEvent) {
    //     event.data.player.increaseResource("Health", 1)
    // }
    interact(): void {
        // dont open
        // open roll
        // open level
    }

    finishInteract() {
        // discard
    }

    public structure = {
        name: "Wooden Chest",
        type: "CHEST",
        action: [{
            type: "OPEN",
            requirements: "NONE",
            action: "ROLL_A_DIE",
            result: [{
                dieNumber: 1,
                action: {
                    type: "DECREASE",
                    resource: "HEALTH",
                    amount: 2
                }
            }, {
                dieNumber: 2,
                action: {
                    type: "DECREASE",
                    resource: "HEALTH",
                    amount: 2
                }
            }, {
                dieNumber: 3,
                action: {
                    type: "DECREASE",
                    resource: "HEALTH",
                    amount: 1
                }
            }, {
                dieNumber: 4,
                action: {
                    type: "DECREASE",
                    resource: "HEALTH",
                    amount: 1
                }
            }, {
                dieNumber: 5,
                action: {
                    type: "INCREASE",
                    resource: "HEALTH",
                    amount: 1
                }
            }, {
                dieNumber: 6,
                action: {
                    type: "INCREASE",
                    resource: "LEVEL",
                    amount: 1
                }
            }]
        }, {
            type: "OPEN",
            requirements: {
                resource: "LEVEL",
                amount: 2
            },
            action: "NONE",
            result: [{
                action: {
                    type: "INCREASE",
                    resource: "HEALTH",
                    amount: 2
                }
            }]
        }]
    }
}
