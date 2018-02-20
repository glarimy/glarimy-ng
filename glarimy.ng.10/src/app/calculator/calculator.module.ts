import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CalculatorComponent } from './calculator.component';
import { NameService } from '../name.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent],
  providers: [NameService]
})
export class CalculatorModule { }
