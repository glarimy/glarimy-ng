import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { AdderComponent } from '../adder/adder.component';
import { MultiplierComponent } from '../multiplier/multiplier.component';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    BrowserModule
  ],
  declarations: [AdderComponent, MultiplierComponent, CalculatorComponent],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
