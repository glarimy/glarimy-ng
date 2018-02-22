import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'new', component: NewEmployeeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'detail/:name', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
