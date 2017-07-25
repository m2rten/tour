import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { Liige } from './liige';

@Injectable()
export class VillaService {
	
private heroesUrl = 'api/heroes';  // URL to web api
private villaUrl = 'api/v1/liikmed'
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }

   getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}

   getLiikmed(): Promise<Liige []> {
	   console.log("getting Liikmed");
	   console.log (this.villaUrl);
  return this.http.get(this.villaUrl)
             .toPromise()
             .then(response => {console.log(response.json()); return response.json() as Liige[]})
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}