import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopAddProductComponent } from './components/shop-add-product/shop-add-product.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopV2Component } from './components/shop-v2/shop-v2.component';
import { ShopV2AddProductComponent } from './components/shop-v2-add-product/shop-v2-add-product.component';
import { ShopV2ListComponent } from './components/shop-v2-list/shop-v2-list.component';
import { ExoEventFormComponent } from './components/exo-event-form/exo-event-form.component';
import { ExoShopV3Product1Component } from './components/exo-shop-v3-product1/exo-shop-v3-product1.component';
import { ExoShopV3BasketComponent } from './components/exo-shop-v3-basket/exo-shop-v3-basket.component';
import { ExoShopV3Product2Component } from './components/exo-shop-v3-product2/exo-shop-v3-product2.component';
import { ExoShopV3Product3Component } from './components/exo-shop-v3-product3/exo-shop-v3-product3.component';


@NgModule({
  declarations: [
    MainExosComponent,
    ExoChronoComponent,
    ShopComponent,
    ShopAddProductComponent,
    ShopListComponent,
    ShopV2Component,
    ShopV2AddProductComponent,
    ShopV2ListComponent,
    ExoEventFormComponent,
    ExoShopV3Product1Component,
    ExoShopV3BasketComponent,
    ExoShopV3Product2Component,
    ExoShopV3Product3Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
