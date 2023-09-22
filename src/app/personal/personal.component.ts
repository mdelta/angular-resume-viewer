import { Component, Input } from '@angular/core';
import { Basics } from 'src/model/basics.model';
import { Location } from 'src/model/location.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  @Input() item!: Basics;
  @Input() location!: Location;
}
