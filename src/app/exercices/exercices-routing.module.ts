import { ExoShopV3Product1Component } from './components/exo-shop-v3-product1/exo-shop-v3-product1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopV2Component } from './components/shop-v2/shop-v2.component';
import { ExoEventFormComponent } from './components/exo-event-form/exo-event-form.component';
import { ExoShopV3BasketComponent } from './components/exo-shop-v3-basket/exo-shop-v3-basket.component';
import { ExoShopV3Product2Component } from './components/exo-shop-v3-product2/exo-shop-v3-product2.component';
import { ExoShopV3Product3Component } from './components/exo-shop-v3-product3/exo-shop-v3-product3.component';

const routes: Routes = [
  {path:'', component: MainExosComponent, children : [
    {path:'chrono', component:ExoChronoComponent},
    {path:'shop', component:ShopComponent},
    {path:'shopv2', component:ShopV2Component},
    {path:'eventForm', component:ExoEventFormComponent},
    {path:'shopv3', component:ExoShopV3BasketComponent},
    {path:'prod1', component:ExoShopV3Product1Component},
    {path:'prod2', component:ExoShopV3Product2Component},
    {path:'prod3', component:ExoShopV3Product3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
