import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Users } from '../mockdata';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
  users= Users;
  selectedUser: User;
  onselect(user: User): void{
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
