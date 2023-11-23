import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { character } from './character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  characterData$?: Observable<character>;

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<character> {
    const API_URL = "https://swapi.dev/api/people/1";
    this.characterData$ = this.http.get<any>(API_URL).pipe(
      map((data) => this.mapCharacter(data))
    );

    this.characterData$.forEach(value => console.log(value));
  
    return this.characterData$;
  }

  private mapCharacter(data: any): character {
    return {
      id: 1,
      name: data.name,
      height: parseInt(data.height, 10),
      hairColour: data.hair_color
    } as character;
  }

}