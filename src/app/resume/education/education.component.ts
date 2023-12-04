import { Component, Input, OnInit } from '@angular/core';
import { EducationModel } from '../../../model/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() items!: EducationModel[];

  ngOnInit() {
    this.items.sort((a, b) => {
      // sort descend by date
      if (a.startDate && b.startDate) {
        if (a.startDate > b.startDate) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    });
  }
}
