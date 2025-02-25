import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { MainExosComponent } from './components/main-exos/main-exos.component';


@NgModule({
  declarations: [
    MainExosComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
