import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { Hero } from 'src/app/hero';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  profileHero = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    power: new FormControl('', Validators.required),
    passWord: new FormControl('',),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      strate: new FormControl('', Validators.required),
    }),
  },Validators.required);

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('value form',this.profileHero.value);
  }

  getHeroes(): any {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      console.log('Heroes', this.heroes);
    });
  }
  updateProfile(): void {
    const value = {
      firstName: '',
      lastName: '',
      power: '',
      address: {
        street: '',
        city: '',
        strate: '',
      },
    };

    this.profileHero.controls.firstName.setValue('jjj');

    this.profileHero.patchValue(value);

    console.log(this.profileHero);
  }
  get firstName() {
    return this.profileHero.get('firstName');
  }
  get lastName() {
    return this.profileHero.get('lastName');
  }
  get powers() {
    return this.profileHero.get('power');
  }
  get street() {
    return this.profileHero.get('street');
  }
  get city() {
    return this.profileHero.get('city');
  }
  get strate() {
    return this.profileHero.get('strate');
  }
}
