import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {
  message: string;
  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
    this.message = this.calculator.add();
  }

}
