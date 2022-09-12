import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  //adds the Item in the Cart
  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  //gets all the items from the cart
  getItems() {
    return this.items;
  }

  //emptys the Cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  //get shipping prices
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  constructor(private http: HttpClient) {}
}
