import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeeListComponent/employee.component';
import { EmployeeDetailComponent } from './employeeDetailComponent/employee-detail-component.component';
import { EmployeeService } from './employee.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    EmployeeService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
