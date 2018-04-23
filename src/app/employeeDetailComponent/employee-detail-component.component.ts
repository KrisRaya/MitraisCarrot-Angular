import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeDetail',
  templateUrl: './employee-detail-component.component.html',
  styleUrls: ['./employee-detail-component.component.css']
})

export class EmployeeDetailComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
