import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Basics } from 'src/model/basics.model';
import { Location } from 'src/model/location.model';
import { SocialMedia } from 'src/model/socialmedia.model';
import { Education } from 'src/model/education.model';
import { Skill } from 'src/model/skill.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  basics: Basics = this.resumeService.basics;
  location: Location = this.resumeService.location;
  socialProfiles: SocialMedia[] = this.resumeService.socialProfiles;
  educationData: Education[] = this.resumeService.educationData;
  skillData: Skill[] = this.resumeService.skillData;

  constructor(private readonly titleService: Title, private readonly resumeService: ResumeService) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.basics.name}, Lebenslauf`);
  }
}
