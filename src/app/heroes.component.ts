import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {
    heroes: Hero[];
	
	constructor( private router: Router, private heroService: HeroService) { }
	
	getHeroes(): void {
	this.heroService.getHeroesSlowly().then(returnedheroes => this.heroes = returnedheroes);
	  console.log ("heroes");
	}
	
	ngOnInit(): void {
	this.getHeroes();
	}
	
  name = 'Angular';

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}