
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }
<<<<<<< Updated upstream
   createDb() {
=======
   createDb(): any {
>>>>>>> Stashed changes
    const powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    const heroes = [
      { id: 11, name: 'Dr Nice', power: powers[3] , alterEgo: 'Chuck Overstreet'  },
      { id: 12, name: 'Narco', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 13, name: 'Naco', power: powers[1], alterEgo: 'Chuck Overstreet' },
      { id: 14, name: 'Naro', power: powers[0], alterEgo: 'Chuck Overstreet' },
      { id: 15, name: 'Arco', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 16, name: 'NaXo', power: powers[3], alterEgo: 'Chuck Overstreet' },
      { id: 17, name: 'Maox', power: powers[1], alterEgo: 'Chuck Overstreet' },
      { id: 18, name: 'Nara', power: powers[2], alterEgo: 'Chuck Overstreet' },
      { id: 19, name: 'Blex', power: powers[0], alterEgo: 'Chuck Overstreet' },
      { id: 20, name: 'Acos', power: powers[1], alterEgo: 'Chuck Overstreet' },

    ];
    return {heroes};
<<<<<<< Updated upstream
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
=======
>>>>>>> Stashed changes
  }
 genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
 }
}
