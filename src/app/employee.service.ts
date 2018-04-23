import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs/Observable';
import { Users } from './mockdata';
import { of } from 'rxjs/observable/of';
import { User } from './user';

@Injectable()
export class EmployeeService {

  constructor(private messageService: MessagesService) { }

  getEmployees(): Observable<User[]> {
    this.messageService.add('EmployeeService: Fetched Users');
    return of(Users);
  }

  getEmployee(id: number): Observable<User> {
     // TODO: send the message _after_ fetching the hero
     this.messageService.add(`EmployeeService: fetched user id=${id}`);
     return of(Users.find(user => user.id === id));
  }
}
