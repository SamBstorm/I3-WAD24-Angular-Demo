import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { MainExosComponent } from './components/main-exos/main-exos.component';
import { SharedModule } from '../shared/shared.module';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';


@NgModule({
  declarations: [
    MainExosComponent,
    ExoChronoComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ]
})
export class ExercicesModule { }
