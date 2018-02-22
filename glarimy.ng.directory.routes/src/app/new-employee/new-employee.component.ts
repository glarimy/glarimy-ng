import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DirectoryService } from '../directory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  name: string;
  email: string;
  phone: number;
  nameError: string;
  phoneError: string;
  emailError: string;

  constructor(private directoryService: DirectoryService, private router: Router) {}

  ngOnInit() {}

  add() {
    let valid = true;
    if (this.name === undefined) {
      this.nameError = 'Name is mandatory';
      valid = false;
    } else {
      this.nameError = undefined;
    }

    if (this.phone === undefined) {
      this.phoneError = 'PhoneNumber is mandatory';
      valid = false;
    } else {
      this.phoneError = undefined;
    }

    if (this.email === undefined) {
      this.emailError = 'Email ID is mandatory';
      valid = false;
    } else {
      this.emailError = undefined;
    }
    if (valid) {
      const employee = new Employee(this.name, this.phone, this.email);
      this.directoryService.add(employee);

      this.name = undefined;
      this.phone = undefined;
      this.email = undefined;
      this.router.navigate(['/list']);
    }
  }

  cancel() {
    this.nameError = undefined;
    this.phoneError = undefined;
    this.emailError = undefined;
    this.name = undefined;
    this.phone = undefined;
    this.email = undefined;
  }
}
