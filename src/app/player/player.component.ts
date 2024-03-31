import { Component } from "@angular/core";

@Component({
    selector : "app-player",
    templateUrl : './player.component.html',
    styleUrls : ['./player.component.scss']
})

export class PlayerComponent {
    playerName :string = "MS Dhoni";
    playerId : number = 7;
}