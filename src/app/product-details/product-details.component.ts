import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  //constructor
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdByRoute = Number(routeParams.get("productId"));
    this.product = products.find((product) => product.id === productIdByRoute);
  }

  //product
  product: Product | undefined;

  //methods
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("The product has been succesfully added to the Cart!")
  }

}
