import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../../model/education.model';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss'],
})
export class EducationItemComponent implements OnInit {
  @Input() element!: Education;

  constructor() {}

  ngOnInit() {}

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}`;
  }
}
