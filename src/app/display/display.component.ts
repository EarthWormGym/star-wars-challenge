import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { character } from '../character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
  characterData$?: Observable<character>;

  constructor(private _starwarsService: StarWarsService) { }

  ngOnInit() { 
    this.characterData$ = this._starwarsService.characterData$;
  }

}
