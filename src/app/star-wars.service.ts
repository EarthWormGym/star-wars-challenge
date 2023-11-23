import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { character } from './character';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characterDataSubject = new Subject<character>();
  characterData$ = this.characterDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCharacter(characterId: number) {
    const API_URL = `https://swapi.dev/api/people/${characterId}`;

    this.http.get<any>(API_URL).pipe(
      map((data) => this.mapCharacter(characterId, data))
    ).subscribe((characterData: character) => {
      this.characterDataSubject.next(characterData);
    });
  }

  private mapCharacter(characterId: number, data: any): character {
    return {
      id: characterId,
      name: data.name,
      height: parseInt(data.height, 10),
      hairColour: data.hair_color
    } as character;
  }

}