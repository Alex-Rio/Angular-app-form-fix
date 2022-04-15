import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit, OnChanges {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = {
    name: '',
    alterEgo: '',
  };

  submitted = false;

  @Input() hero?: any;

  ngOnInit(): void {
    this.model = this.hero;
  }

  ngOnChanges(): void {}

  onSubmit(): void {
    const myHero = new Hero(
      42,
      'SkyDog',
      'Fech any object at any distance',
      'Leslie Rollover'
    );
    console.log('My hero is called' + myHero.name);

    this.submitted = true;
  }
}
