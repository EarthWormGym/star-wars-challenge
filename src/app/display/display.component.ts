import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
  characterData = {};

  constructor(private _starwarsService: StarWarsService) { }

  ngOnInit(): void {
    this.characterData = this._starwarsService.getCharacter();
  }

}
