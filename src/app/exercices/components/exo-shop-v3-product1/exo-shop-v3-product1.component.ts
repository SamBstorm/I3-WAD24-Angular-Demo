import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopV3LocalService } from '../../services/shop-v3-local.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-exo-shop-v3-product1',
  standalone: false,
  templateUrl: './exo-shop-v3-product1.component.html',
  styleUrl: './exo-shop-v3-product1.component.css'
})
export class ExoShopV3Product1Component {

  public productName : string = 'Ordinateur';
  public form : FormGroup;
  public isInBasket : boolean;

  constructor(private _fb : FormBuilder, private _shop : ShopV3LocalService){
    this.isInBasket = this._shop.checkProduct(this.productName);    
    this.form = this.initForm();
  }

  private initForm() : FormGroup{
    return this._fb.group(
      {
        quantity : [(this.isInBasket)?this._shop.getQuantity(this.productName): null, [Validators.required]]
      });
  }

  public onSubmit(){
    if(!this.form.valid) throw new Error('Formulaire invalide.');
    let prod : IProduct = {name : this.productName, quantity : this.form.value.quantity};
    if(this.isInBasket){
      this._shop.updateProduct(prod)
    }
    else{
      this._shop.addProduct(prod);
    }
    this.isInBasket = this._shop.checkProduct(this.productName);
  }
}
