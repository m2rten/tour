import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }         from './hero';
import { Liige }         from './liige';
import { VillaService }  from './villa.service';
@Component({
  selector: 'villa',
  templateUrl: './villa.component.html'
})
export class VillaComponent implements OnInit {
  hero: Hero;
  heroes: Hero[];
  liige: Liige;
  liikmed: Liige[];
  constructor(
    private villaService: VillaService,
    private route: ActivatedRoute
  ) {}
	getLiikmed(): void {
	this.villaService.getLiikmed().then(returnedliikmed => this.liikmed = returnedliikmed);
	  console.log(this.liikmed);
	  console.log ("heroes");
	}
  
	getHeroes(): void {
	this.villaService.getHeroes().then(returnedheroes => this.heroes = returnedheroes);
	  console.log ("heroes");
	}
	
	ngOnInit(): void {
	this.getLiikmed();
	}
  

}
