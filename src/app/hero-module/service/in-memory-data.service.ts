
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }
   // tslint:disable-next-line:typedef
   createDb() {
    const powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    const heroes = [
      { id: 11, name: 'Dr Nice', power: powers[3] , alterEgo: 'Chuck Overstreet'  },
      { id: 12, name: 'Narco', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 13, name: 'Narco', power: powers[1], alterEgo: 'Chuck Overstreet' },
      { id: 14, name: 'Narco', power: powers[0], alterEgo: 'Chuck Overstreet' },
      { id: 15, name: 'Narco', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 16, name: 'Narco', power: powers[3], alterEgo: 'Chuck Overstreet' },
      { id: 17, name: 'Narco', power: powers[1], alterEgo: 'Chuck Overstreet' },
      { id: 18, name: 'Narco', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 19, name: 'Narco', power: powers[0], alterEgo: 'Chuck Overstreet' },
      { id: 20, name: 'Narco', power: powers[1], alterEgo: 'Chuck Overstreet' },

    ];
    return heroes;
  }

}
