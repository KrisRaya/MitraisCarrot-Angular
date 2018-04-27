import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { EmployeeService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: EmployeeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getEmployees()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}