import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  //Initialize form here due to strict property initialization
  starWarsForm = this.fb.group({
    characterId: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private starwarsService: StarWarsService) { }

  onSubmit() {
    const characterIdValue = this.starWarsForm.get('characterId')?.value;
    this.starwarsService.getCharacter(Number(characterIdValue));
    this.starWarsForm.reset();
  }
  
}
