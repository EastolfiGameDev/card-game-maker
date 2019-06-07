import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/base/card";

@Component({
    selector: "cgm-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
    @Input()
    public card: Card;

    constructor() { }

    ngOnInit() {
    }

}
