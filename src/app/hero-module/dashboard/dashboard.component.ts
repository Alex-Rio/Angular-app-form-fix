import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from '../service/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero [] = [];

  displayPosition!: boolean;
  position!: string;
  constructor( private heroService: HeroService,) { }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe( heroes => this.heroes = heroes.slice(0 , 5));
  }
  showPositionDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
  }
}
