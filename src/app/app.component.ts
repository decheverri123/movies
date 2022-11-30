import { Component } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies';
  image = 'https://source.unsplash.com/random/800x600';
}
