import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  //Initialize form here due to strict property initialization
  starWarsForm = this.fb.group({
    characterId: ''
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    const characterIdValue = this.starWarsForm.get('characterId')?.value;
    console.log(characterIdValue);
    this.starWarsForm.reset();
  }
  
}
