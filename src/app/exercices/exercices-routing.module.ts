import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopV2Component } from './components/shop-v2/shop-v2.component';
import { ExoEventFormComponent } from './components/exo-event-form/exo-event-form.component';

const routes: Routes = [
  {path:'', component: MainExosComponent, children : [
    {path:'chrono', component:ExoChronoComponent},
    {path:'shop', component:ShopComponent},
    {path:'shopv2', component:ShopV2Component},
    {path:'eventForm', component:ExoEventFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
