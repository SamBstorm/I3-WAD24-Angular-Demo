import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ShopV3LocalService } from '../../services/shop-v3-local.service';

@Component({
  selector: 'app-exo-shop-v3-basket',
  standalone: false,
  templateUrl: './exo-shop-v3-basket.component.html',
  styleUrl: './exo-shop-v3-basket.component.css'
})
export class ExoShopV3BasketComponent {
  public basket : IProduct[]

  constructor(private _shop : ShopV3LocalService){
    this.basket = this._shop.getBasket();
  }

  public remove(productName : string) : void {
    this._shop.deleteProduct(productName);
    this.basket = this._shop.getBasket();
  }
}
