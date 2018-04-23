import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-employeeDetail',
  templateUrl: './employee-detail-component.component.html',
  styleUrls: ['./employee-detail-component.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
