import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  name = 'Glarimy Calculator';
  visible = true;
  menu = 'Hide Title';
  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.visible = !this.visible;
    this.menu = this.visible ? 'Hide Title' : 'Show Title';
  }

}
