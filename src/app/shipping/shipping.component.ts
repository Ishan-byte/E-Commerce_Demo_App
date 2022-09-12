import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingcosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingcosts = this.cartService.getShippingPrices();
  }
}
