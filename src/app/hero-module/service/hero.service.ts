import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../hero';
import { HEROES } from '../../hero-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';
  constructor( private http: HttpClient ,
                ) { }

  getHeroes(): Observable<Hero[]>
  {
    const heroes = of (HEROES);
    return this.http.get<Hero[]>(this.heroUrl);
  }
}
