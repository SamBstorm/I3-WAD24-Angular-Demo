import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReverseTextPipe,
    MathPowPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    ReverseTextPipe,
    MathPowPipe,
    FormsModule
  ]
})
export class SharedModule { }
