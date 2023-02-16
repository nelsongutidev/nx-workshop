import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormatRatingPipe,
  GameDetailComponent,
} from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent },
    ]),
  ],
  declarations: [GameDetailComponent, FormatRatingPipe],
})
export class StoreFeatureGameDetailModule {}
