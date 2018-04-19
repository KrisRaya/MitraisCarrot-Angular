import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  user: User = {
    id: 1,
    name: "Kris Raya",
    email: "krisraya13@gmail.com"
  }

  constructor() { }

  ngOnInit() {
  }

}
