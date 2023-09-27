import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BasicsModel } from 'src/model/basics.model';
import { LocationModel } from 'src/model/location.model';
import { SocialMediaModel } from 'src/model/socialmedia.model';
import { EducationModel } from 'src/model/education.model';
import { SkillModel } from 'src/model/skill.model';
import { ResumeService } from '../services/resume.service';

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
  skillData: SkillModel[] = this.resumeService.skillData;

  constructor(private readonly titleService: Title, private readonly resumeService: ResumeService) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.basics.name}, Lebenslauf`);
  }
}
