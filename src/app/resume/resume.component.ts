import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasicsModel } from 'src/model/basics.model';
import { LocationModel } from 'src/model/location.model';
import { SocialMediaModel } from 'src/model/socialmedia.model';
import { EducationModel } from 'src/model/education.model';
import { SkillModel } from 'src/model/skill.model';
import { ResumeService } from './resume.service';
import { LanguageModel } from 'src/model/language.model';
import { WorkModel } from 'src/model/work.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  basics: BasicsModel = this.resumeService.basics;
  location: LocationModel = this.resumeService.location;
  socialProfiles: SocialMediaModel[] = this.resumeService.socialProfiles;
  educationData: EducationModel[] = this.resumeService.educationData;
  workData: WorkModel[] = this.resumeService.workData;
  skillData: SkillModel[] = this.resumeService.skillData;
  languageData: LanguageModel[] = this.resumeService.languageData;

  constructor(private readonly titleService: Title, private readonly resumeService: ResumeService) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.basics.name}, Lebenslauf`);
  }
}
