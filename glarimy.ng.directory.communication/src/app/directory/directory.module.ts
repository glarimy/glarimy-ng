import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectoryComponent } from './directory.component';
import { DirectoryService } from '../directory.service';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { NotificationService } from '../notification.service';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  declarations: [DirectoryComponent, NewEmployeeComponent, EmployeeListComponent, EmployeeDetailComponent],
  bootstrap: [DirectoryComponent],
  providers: [DirectoryService, NotificationService]
})
export class DirectoryModule { }
