import { Component, OnInit } from '@angular/core';
import * as data from '../assets/resume.json';
import { Education } from 'src/model/education.model';
import { SocialMedia } from 'src/model/socialmedia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ResumeViewer';
  resumeData = data;

  socialProfiles: SocialMedia[] = [];
  educationData: Education[] = [];

  ngOnInit() {
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
