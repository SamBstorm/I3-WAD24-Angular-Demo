import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';


@NgModule({
  declarations: [  
    Demo01Component, Demo02Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
