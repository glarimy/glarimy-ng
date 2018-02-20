import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NameService } from '../name.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  name: string;
  constructor(private nameService: NameService) { }

  ngOnInit() {
    this.nameService.getName().subscribe(
      name => this.name = name,
      error => this.name = error);
  }

}
