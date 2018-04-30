import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { EmployeeService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: EmployeeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getEmployees()
    .subscribe(heroes => this.heroes = heroes);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
  // addEmail(email: string): void {
  //   email = email.trim();
  //   if (!email) { return; }
  //   this.heroService.addHero({ email } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  addNameEmail(name: string,email:string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    if (!email) { return; }
    
    this.heroService.addHero({ name,email } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  selectedHero: Hero;
  onselect(hero: Hero): void{
    this.selectedHero = hero;
  }

}