import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdderComponent } from '../adder/adder.component';
import { MultiplierComponent } from '../multiplier/multiplier.component';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [AdderComponent, MultiplierComponent, CalculatorComponent],
  bootstrap: [CalculatorComponent],
  providers: [CalculatorService]
})
export class CalculatorModule { }
