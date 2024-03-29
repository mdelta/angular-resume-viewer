import { Component, Input } from '@angular/core';
import { WorkModel } from 'src/model/work.model';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
})
export class WorkItemComponent {
  @Input() element!: WorkModel;
}
