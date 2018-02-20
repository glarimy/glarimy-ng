import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent],
  providers: []
})
export class CalculatorModule { }
