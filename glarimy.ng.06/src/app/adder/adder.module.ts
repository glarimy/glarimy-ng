import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdderComponent } from './adder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AdderComponent
  ],
  declarations: [AdderComponent]
})
export class AdderModule { }
