import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable()
export class DirectoryService {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  add(employee: Employee) {
    this.employees.push(employee);
  }

  find(name: string) {
    return this.employees.find(e => e.name === name);
  }

  list(): Employee[] {
    return this.employees;
  }

}
