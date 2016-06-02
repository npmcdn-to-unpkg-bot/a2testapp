import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hereos',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent]

})


export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes: Hero[];
  addingHero = false;
  error: any;

  constructor(private heroService: HeroService, private router: Router) { }

  getHeroes() {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero).then(
      res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
    }



  gotoDetail() {
   this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}
