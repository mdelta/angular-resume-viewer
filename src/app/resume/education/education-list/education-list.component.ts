import { Component, Input } from '@angular/core';
import { EducationModel } from '../../../../model/education.model';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss'],
})
export class EducationListComponent {
  @Input() items!: EducationModel[];
}
