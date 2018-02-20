import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplierComponent } from './multiplier.component';

@NgModule({
  imports: [
    CommonModule
  ], exports: [MultiplierComponent],
  declarations: [MultiplierComponent]
})
export class MultiplierModule { }
