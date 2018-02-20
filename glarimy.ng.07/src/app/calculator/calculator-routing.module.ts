import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdderComponent } from '../adder/adder.component';
import { MultiplierComponent } from '../multiplier/multiplier.component';

const routes: Routes = [
  { path: '', redirectTo: '/adder', pathMatch: 'full' },
  { path: 'adder', component: AdderComponent },
  { path: 'multiplier', component: MultiplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
