import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameComponent } from './name/name.component';
import { PersonalComponent } from './personal/personal.component';
import { SocialComponent } from './social/social.component';
import { SocialListComponent } from './social/social-list/social-list.component';
import { SocialItemComponent } from './social/social-item/social-item.component';
import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { WorkComponent } from './work/work.component';
import { WorkItemComponent } from './work/work-item/work-item.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SkillItemComponent } from './skills/skill-item/skill-item.component';
import { SkillLevelComponent } from './skills/skill-level/skill-level.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageItemComponent } from './languages/language-item/language-item.component';
import { LanguageLevelComponent } from './languages/language-level/language-level.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageListComponent } from './languages/language-list/language-list.component';
import { MyCommonModule } from '../common/mycommon.module';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    ResumeComponent,
    EducationListComponent,
    EducationItemComponent,
    EducationComponent,
    NameComponent,
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
    LanguagesComponent,
    LanguageItemComponent,
    LanguageLevelComponent,
    LanguageListComponent,
  ],
  imports: [
    CommonModule,
    MyCommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
    FontAwesomeModule,
    LayoutModule,
  ],
  providers: [ResumeService],
  exports: [ResumeComponent],
})
export class ResumeModule {}
