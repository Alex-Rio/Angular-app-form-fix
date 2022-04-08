import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

// import { HEROES } from 'src/app/hero-mock';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor( private heroService: HeroService , private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void{
  this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
