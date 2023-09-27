import * as data from '../../assets/resume.json';
import { Injectable } from '@angular/core';
import { BasicsModel } from 'src/model/basics.model';
import { LocationModel } from 'src/model/location.model';
import { SocialMediaModel } from 'src/model/socialmedia.model';
import { EducationModel } from 'src/model/education.model';
import { SkillModel } from 'src/model/skill.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumeData = data;
  basics: BasicsModel = new BasicsModel(this.resumeData.basics);
  location: LocationModel = new LocationModel(this.resumeData.basics.location);
  socialProfiles: SocialMediaModel[] = [];
  educationData: EducationModel[] = [];
  skillData: SkillModel[] = [];

  constructor() {
    for (const item of this.resumeData.basics.profiles) {
      const social = new SocialMediaModel(item);
      this.socialProfiles.push(social);
    }

    for (const item of this.resumeData.education) {
      const education = new EducationModel(item);
      this.educationData.push(education);
    }

    for (const item of this.resumeData.skills) {
      const skill = new SkillModel(item);
      this.skillData.push(skill);
    }
  }
}
