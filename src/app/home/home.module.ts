import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, ImpressumComponent, DsgvoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    RouterModule,
  ],
})
export class HomeModule {}
