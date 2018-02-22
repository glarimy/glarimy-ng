import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DirectoryService } from '../directory.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private directoryService: DirectoryService, private notificationService: NotificationService) {}

  ngOnInit() {
  }

}
