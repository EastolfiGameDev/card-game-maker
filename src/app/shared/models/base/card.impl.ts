import { EventManager } from '../../events/event-manager';
import { CardInteractionEvent } from '../../events/card-interaction-event';
import { IEvent } from '../../events/IEvent';
import { Card } from "./card";
import { Interaction } from "../../factories/interaction.factory";

export class CardImpl implements Card/*<-useful?*/ {
    public _id: number = (new Date()).getTime()
    public name: string;
    public revealed: boolean = false;
    public interactions: Interaction[];
    
    public showingInteractions: boolean = false;

    constructor() {
        EventManager.getInstance().emitter.subscribe((event: IEvent) => {
            if (event.type === "CARD_INTERACTION") {
                this.handleInteractionEvent(event as CardInteractionEvent)
            }
        })
    }
    
    private handleInteractionEvent(event: CardInteractionEvent) {
        if (event.data.card._id === this._id) {
            if (event.subType === "START") {
                this.onCardInteraction((event as CardInteractionEvent))
            } else if (event.subType === "END") {
                this.showingInteractions = false
            }
        }
    }

    showInteractions(): void {
        this.showingInteractions = true
    }
    
    protected onCardInteraction(event: CardInteractionEvent) {
        console.log("Interaction on card: ");
        console.log(event.data.card);
    }

    public reveal(): void {
        this.revealed = true;
    }
    public hide(): void {
        this.revealed = false;
    }
    public toggleReveal(): void {
        this.revealed ? this.hide() : this.reveal()
    }
}