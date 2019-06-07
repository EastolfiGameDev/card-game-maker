import { Resource } from './resource';
import { Card } from "./card";

export class Player {
    public name: string;
    public resources: Resource[] = [];
    public hand: Card[] = [];

    constructor(name: string) {
        this.name = name;
        this.resources.push({ name: "Level", value: 1 })
        this.resources.push({ name: "Health", value: 3 })
    }

    public getResource(name: string): Resource {
        const resources = this.resources.filter((resource: Resource) => resource.name === name);

        return (resources && resources.length) ? resources[0] : null;
    }
    public setResource(name: string, value: number): void {
        const resources = this.resources.filter((resource: Resource) => resource.name === name);

        if (resources && resources.length) {
            resources[0].value = value;
        }
    }
    public increaseResource(name: string, value: number): void {
        const resources = this.resources.filter((resource: Resource) => resource.name === name);

        if (resources && resources.length) {
            resources[0].value += value;
        }
    }
    public decreaseResource(name: string, value: number): void {
        const resources = this.resources.filter((resource: Resource) => resource.name === name);

        if (resources && resources.length) {
            resources[0].value -= value;
        }
    }
}