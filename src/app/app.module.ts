import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { StarWarsService } from './star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
