import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { FormsModule } from '@angular/forms';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    HighlightDirective,
    FormsModule
  ]
})
export class SharedModule { }
