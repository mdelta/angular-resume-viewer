import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlipcardComponent } from './common/flipcard/flipcard.component';
import { VcardComponent } from './common/vcard/vcard.component';

import { NameComponent } from './resume/name/name.component';
import { PersonalComponent } from './resume/personal/personal.component';
import { SocialComponent } from './resume/social/social.component';
import { SocialListComponent } from './resume/social/social-list/social-list.component';
import { SocialItemComponent } from './resume/social/social-item/social-item.component';
import { EducationComponent } from './resume/education/education.component';
import { EducationListComponent } from './resume/education/education-list/education-list.component';
import { EducationItemComponent } from './resume/education/education-item/education-item.component';
import { WorkComponent } from './resume/work/work.component';
import { WorkItemComponent } from './resume/work/work-item/work-item.component';
import { WorkListComponent } from './resume/work/work-list/work-list.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { SkillListComponent } from './resume/skills/skill-list/skill-list.component';
import { SkillItemComponent } from './resume/skills/skill-item/skill-item.component';
import { SkillLevelComponent } from './resume/skills/skill-level/skill-level.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    SkillsComponent,
    SkillListComponent,
    SkillItemComponent,
    SkillLevelComponent,
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
