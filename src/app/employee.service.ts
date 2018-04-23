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

}
