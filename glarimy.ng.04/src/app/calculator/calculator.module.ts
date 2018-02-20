import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent],
  providers: []
})
export class CalculatorModule { }
