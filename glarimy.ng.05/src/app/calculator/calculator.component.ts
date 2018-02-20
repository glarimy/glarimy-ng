import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value: number;
  result: number;
  constructor() { }

  ngOnInit() {

  }

  square() {
    this.result = this.value * this.value;
  }

  clear() {
    this.result = undefined;
    this.value = undefined;
  }

}
