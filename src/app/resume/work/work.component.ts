import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/model/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @Input() items!: WorkModel[];

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
