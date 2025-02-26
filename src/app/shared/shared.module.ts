import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { FormsModule } from '@angular/forms';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    FormsModule
  ]
})
export class SharedModule { }
