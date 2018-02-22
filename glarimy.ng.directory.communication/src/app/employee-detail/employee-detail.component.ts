import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DirectoryService } from '../directory.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  result: Employee;

  constructor(private directoryService: DirectoryService, private notificationService: NotificationService) {
    this.result = new Employee(undefined, undefined, undefined);
    this.notificationService.name.subscribe(ename => {
      this.result = this.directoryService.find(ename);
    });
  }

  ngOnInit() {
  }
}
