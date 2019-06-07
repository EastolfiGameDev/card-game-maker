import { Interaction } from "../../factories/interaction.factory";

export interface Card {
    _id: number;
    revealed: boolean;
    name: string;
    interactions: Interaction[];

    showingInteractions: boolean;

    showInteractions: () => void;
}