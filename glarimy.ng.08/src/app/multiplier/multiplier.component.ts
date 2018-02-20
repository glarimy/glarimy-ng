import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-multiplier',
  templateUrl: './multiplier.component.html',
  styleUrls: ['./multiplier.component.css']
})
export class MultiplierComponent implements OnInit {
  message: string;
  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
    this.message = this.calculator.multiply();
  }

}
