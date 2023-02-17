import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RatingPipe } from './pipes/rating/rating.pipe';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [HeaderComponent, RatingPipe],
  exports: [HeaderComponent, RatingPipe],
})
export class StoreUiSharedModule {}
