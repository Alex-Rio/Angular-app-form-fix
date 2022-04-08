import { Component } from '@angular/core';

import { Hero } from '../../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[4], 'Chuck Overstreet');
  submitted = false;



  onSubmit(): void {
    const myHero = new Hero (42 , 'SkyDog', 'Fech any object at any distance', 'Leslie Rollover');
    console.log('My hero is called' + myHero.name);

    this.submitted = true;
  }
}
