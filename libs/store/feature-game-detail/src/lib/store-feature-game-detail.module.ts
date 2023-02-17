import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    StoreUiSharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent },
    ]),
  ],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
