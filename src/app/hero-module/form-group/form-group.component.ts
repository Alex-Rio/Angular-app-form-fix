import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { Hero } from 'src/app/hero';
import { Validators } from '@angular/forms';
import {MessageService} from 'primeng-lts/api';



@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,  private messageService: MessageService)  {}

  profileHero = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    power: new FormControl('', Validators.required),
    passWord: new FormControl('',[Validators.required]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      strate: new FormControl('', Validators.required),
    }),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('value form',this.profileHero.value);
    this.profileHero.reset();
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
      passWord:'',
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
  get passWord(){
    return this.profileHero.get('passWord');
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
  showBottomCenter() {
    this.messageService.add({key: 'bc', severity:'success', summary: 'Thông báo', detail: 'Đã thêm thành công'});
}
}
