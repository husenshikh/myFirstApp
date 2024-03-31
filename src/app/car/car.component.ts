import { Component } from "@angular/core";

@Component({
    selector : "app-car",
    templateUrl : './car.component.html',
    styleUrls : ['./car.component.scss']
})

export class CarComponent {
    carName :string = "THAR";
    color : string = "Black";
}