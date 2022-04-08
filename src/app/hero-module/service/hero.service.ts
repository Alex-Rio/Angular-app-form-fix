import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../hero';
import { MessageService } from './message.service';
import { catchError, tap, map } from 'rxjs/operators';
// import { HEROES } from '../../hero-mock';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private messageSevice: MessageService,
    private http: HttpClient
  ) {}
  private log(message: string): void {
    this.messageSevice.add(`HeroService: ${message}`);
  }
  getHeroNo404< Data >(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap( _ => this.log(`fetched heroes`)),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap( _ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>( `getHero id=${id}`))
    );
  }

  // tslint:disable-next-line:typedef

  private handleError<T>(  _opertion= 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`$(operation) failed: ${error.message}`);
      return of(result as T);
    };
  }

}

