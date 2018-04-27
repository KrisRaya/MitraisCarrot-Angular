import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employee = [
      { id : 1, name: 'Nanda' ,email: 'nurcholis.nanda@gmail.com'},
      { id : 2, name: "Jafar" ,email: 'jafarshodiqyb@gmail.com'},
      { id : 3, name: 'Kris' ,email: 'krisraya13@gmail.com'},
      { id : 4, name: 'Raisa' ,email: 'raisa6690@gmail.com'}
        
    ];
    return {employee};
  }
}