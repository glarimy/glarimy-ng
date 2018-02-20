import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() {
    console.log('CalculatorService:cons');
  }
  add(): string {
    return 'sum';
  }

  multiply(): string {
    return 'product';
  }

}
