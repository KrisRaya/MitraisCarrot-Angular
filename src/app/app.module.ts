import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeeListComponent/employee.component';
import { EmployeeDetailComponent } from './employeeDetailComponent/employee-detail-component.component';
import { EmployeeService } from './employee.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
