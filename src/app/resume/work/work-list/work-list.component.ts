import { Component, Input } from '@angular/core';
import { WorkModel } from 'src/model/work.model';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
})
export class WorkListComponent {
  @Input() items!: WorkModel[];
}
