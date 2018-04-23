import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
  users: User[];
  selectedUser: User;
  onselect(user: User): void{
    this.selectedUser = user;
  }
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void{
    this.employeeService.getEmployees().subscribe(users=>this.users=users);

  }

}
