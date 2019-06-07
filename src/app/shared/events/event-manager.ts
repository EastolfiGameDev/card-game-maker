import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CardInteractionEvent } from './card-interaction-event';
import { IEvent } from './IEvent';

let instance = null;
let token = Symbol("EventManager")
export class EventManager {
    public emitter: EventEmitter<any> = new EventEmitter();

    constructor(_token: Symbol) {
        if (_token !== token) throw new Error("Constructor not allowed. Use getInstance()")
    }

    public static getInstance(): EventManager {
        if (instance === null) instance = new EventManager(token);

        return instance;
    }

    public emit(event: IEvent) {
        this.emitter.emit(event)
    }
}