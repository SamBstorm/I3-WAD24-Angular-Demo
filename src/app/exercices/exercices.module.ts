import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopAddProductComponent } from './components/shop-add-product/shop-add-product.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';


@NgModule({
  declarations: [
    MainExosComponent,
    ExoChronoComponent,
    ShopComponent,
    ShopAddProductComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
