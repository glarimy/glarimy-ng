import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DirectoryService } from '../directory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  result: Employee;

  constructor(private directoryService: DirectoryService, private route: ActivatedRoute) {
    this.result = this.directoryService.find(route.snapshot.paramMap.get('name'));
  }

  ngOnInit() {
  }
}
