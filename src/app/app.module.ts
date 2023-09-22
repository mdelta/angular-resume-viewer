import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationItemComponent } from './education/education-item/education-item.component';

import { SocialComponent } from './social/social.component';
import { SocialListComponent } from './social/social-list/social-list.component';
import { SocialItemComponent } from './social/social-item/social-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { NameComponent } from './name/name.component';
import { VcardComponent } from './vcard/vcard.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { WorkItemComponent } from './work/work-item/work-item.component';
import { WorkListComponent } from './work/work-list/work-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationListComponent,
    EducationItemComponent,
    EducationComponent,
    NameComponent,
    VcardComponent,
    FlipcardComponent,
    SocialComponent,
    SocialListComponent,
    SocialItemComponent,
    PersonalComponent,
    WorkComponent,
    WorkItemComponent,
    WorkListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
