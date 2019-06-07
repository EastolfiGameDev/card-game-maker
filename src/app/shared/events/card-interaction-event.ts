import { IEvent } from './IEvent';
import { Player } from '../models/base/player';
import { Card } from "../models/base/card";

export class CardInteractionEvent implements IEvent {
    type: string = "CARD_INTERACTION";
    subType: string;
    data: {
        card: Card,
        player: Player
    };

    constructor(data: { card: Card, player: Player }) {
        this.data = data;
    }
}