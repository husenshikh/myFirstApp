import { Component } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})

export class ProductComponent {
    productName :string = "Iphone 15 pro";
    productId : number = 1234;
}