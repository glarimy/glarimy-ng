import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { AdderModule} from '../adder/adder.module';
import { MultiplierModule } from '../multiplier/multiplier.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule, CommonModule, AdderModule, MultiplierModule
  ],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
