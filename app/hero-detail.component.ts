import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls:  ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  navigated = false;
  error: any;
  constructor(private heroService: HeroService, private routeParams: RouteParams) {

  }

  ngOnInit () {
    if(this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id).then(
        hero => this.hero = hero
      );
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
  }

  save() {
    this.heroService.save(this.hero).then(
      hero => {
        this.hero = hero;
        this.goBack(hero);
      }
    ).catch(
      error => this.error = error
    );
  }

  goBack(hero) {
    window.history.back();
  }


}
