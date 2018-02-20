import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdderModule } from './app/adder/adder.module';
import { MultiplierModule } from './app/multiplier/multiplier.module';
import { CalculatorModule } from './app/calculator/calculator.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CalculatorModule)
  .catch(err => console.log(err));
