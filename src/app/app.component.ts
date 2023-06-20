import { Component } from '@angular/core';
import * as data from '../assets/resume.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ResumeViewer';
  resumeData = data;

  ngOnInit() {
    console.log(data);
  }
}
