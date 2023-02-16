import { Component, Pipe } from '@angular/core';
import { getAllGames } from '../fake-api';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
  formatRating = formatRating;
}

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe {
  transform(value: number): string {
    return formatRating(value);
  }
}
