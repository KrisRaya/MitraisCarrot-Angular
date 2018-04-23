import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employeeListComponent/employee.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeeDetailComponent }  from './employeeDetailComponent/employee-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'employees', component: EmployeeListComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
