import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

const KEY : string = 'basket'
@Injectable({
  providedIn: 'root'
})
export class ShopV3LocalService {

  public basket : IProduct[];

  constructor() { 
    this.basket = this.getBasket();
  }

  public getBasket() : IProduct[]{
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as IProduct[];
  }

  public saveBasket() : void{
    localStorage.setItem(KEY, JSON.stringify(this.basket));
  }

  public addProduct(newProduct : IProduct) : void {
    this.basket = this.getBasket();
    if(this.basket.filter(p => p.name == newProduct.name).length >= 1) throw new Error('Produit déjà présent!');
    this.basket.push(newProduct);
    this.saveBasket();
  }

  public updateProduct(product : IProduct) : void{
    this.basket = this.getBasket();
    let index = this.basket.map(p=>p.name).indexOf(product.name);
    if(index == -1) throw new Error('Produit non présent...');
    this.basket[index].quantity = product.quantity;
    this.saveBasket();
  }

  public deleteProduct(productName : string) : void{
    this.basket = this.getBasket();
    let index = this.basket.map(p=>p.name).indexOf(productName);
    if(index == -1) throw new Error('Produit non présent...');
    this.basket = this.basket.filter(p => p.name != productName);
    this.saveBasket();
  }

  public checkProduct(productName : string) : boolean{
    this.basket = this.getBasket();
    return this.basket.map(p=>p.name).indexOf(productName) > -1
  }

  public getQuantity(productName : string) : number{
    if(!this.checkProduct(productName)) throw new Error('Produit non présent...');
    return this.basket.filter(p => p.name == productName)[0].quantity;
  }
}
