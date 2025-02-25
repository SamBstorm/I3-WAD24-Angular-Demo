import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExosComponent } from './components/main-exos/main-exos.component';

const routes: Routes = [
  {path:'', component: MainExosComponent, children : [
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
