import { Component } from '@angular/core';
import * as data from '../assets/resume.json';
import { Education } from 'src/model/education.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ResumeViewer';
  resumeData = data;

  educationData: Education[] = [];

  ngOnInit() {
    for (const item of this.resumeData.education) {
      const education = new Education(item);
      this.educationData.push(education);
    }
  }
}
