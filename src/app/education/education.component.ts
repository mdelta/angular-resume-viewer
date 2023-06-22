import { Component, Input } from '@angular/core';
import { Education } from '../../model/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() items!: Education[];

  constructor() {}
}
