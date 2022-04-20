import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { MessageService } from '../messages/message.service';

// import { HEROES } from 'src/app/hero-mock';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedForm?: HeroFormComponent;
  hero!: any;
  showForm = false;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero, heroform: HeroFormComponent): void {
    this.selectedForm = heroform;
    this.messageService.add(`HeroesComponent: Selected hero id= ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>{this.heroes = heroes; console.log('Heroes',this.heroes);});
  }
  openForm(heroTmp?: any): void {
    this.showForm = true;
    if (heroTmp) {
      this.selectedForm = heroTmp;
    }
  }
}
