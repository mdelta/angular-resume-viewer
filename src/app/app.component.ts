import * as data from '../assets/resume.json';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Basics } from 'src/model/basics.model';
import { Location } from 'src/model/location.model';
import { SocialMedia } from 'src/model/socialmedia.model';
import { Education } from 'src/model/education.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ResumeViewer';
  resumeData = data;

  basics: Basics = new Basics(this.resumeData.basics);
  location: Location = new Location(this.resumeData.basics.location);
  socialProfiles: SocialMedia[] = [];
  educationData: Education[] = [];

  constructor(private readonly titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.resumeData.basics.name}, Lebenslauf`);

    for (const item of this.resumeData.basics.profiles) {
      const social = new SocialMedia(item);
      this.socialProfiles.push(social);
    }

    for (const item of this.resumeData.education) {
      const education = new Education(item);
      this.educationData.push(education);
    }
  }
}
