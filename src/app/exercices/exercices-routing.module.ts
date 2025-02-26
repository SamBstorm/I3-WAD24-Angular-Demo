import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';

const routes: Routes = [
  {path:'', component: MainExosComponent, children : [
    {path:'chrono', component:ExoChronoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
