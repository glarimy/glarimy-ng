import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: number;
  second: number;
  result: number;
  showSum: boolean;
  showProduct: boolean;

  sum() {
    this.result = this.first + this.second;
    this.showSum = true;
    this.showProduct = false;
  }

  multiply() {
    this.result = this.first * this.second;
    this.showProduct = true;
    this.showSum = false;
  }

  clear() {
    this.first = 0;
    this.second = 0;
    this.showProduct = false;
    this.showSum = false;
  }
}
