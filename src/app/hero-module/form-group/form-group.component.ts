import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  profileHero = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address : new FormGroup({
      street: new FormControl(''),
      cty : new FormControl(''),
      strate: new FormControl('')
    })
  });
  heroes: Hero [] = [];
  constructor( private heroService: HeroService ) {
   }
  onSubmit(): void{
    console.warn(this.profileHero.valid);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes );
    }
}
