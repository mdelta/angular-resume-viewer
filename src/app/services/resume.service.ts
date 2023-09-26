import * as data from '../../assets/resume.json';
import { Injectable } from '@angular/core';
import { Basics } from 'src/model/basics.model';
import { Location } from 'src/model/location.model';
import { SocialMedia } from 'src/model/socialmedia.model';
import { Education } from 'src/model/education.model';
import { Skill } from 'src/model/skill.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumeData = data;
  basics: Basics = new Basics(this.resumeData.basics);
  location: Location = new Location(this.resumeData.basics.location);
  socialProfiles: SocialMedia[] = [];
  educationData: Education[] = [];
  skillData: Skill[] = [];

  constructor() {
    for (const item of this.resumeData.basics.profiles) {
      const social = new SocialMedia(item);
      this.socialProfiles.push(social);
    }

    for (const item of this.resumeData.education) {
      const education = new Education(item);
      this.educationData.push(education);
    }

    for (const item of this.resumeData.skills) {
      const skill = new Skill(item);
      this.skillData.push(skill);
    }
  }
}
