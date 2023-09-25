import { Component, Input } from '@angular/core';
import { Education } from '../../../../model/education.model';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss'],
})
export class EducationItemComponent {
  @Input() element!: Education;

  formatDate(date: Date): string {
    const year = date.getFullYear();

    return `${year}`;
  }
}
