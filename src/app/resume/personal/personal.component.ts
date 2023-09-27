import { Component, Input } from '@angular/core';
import { BasicsModel } from 'src/model/basics.model';
import { LocationModel } from 'src/model/location.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  @Input() item!: BasicsModel;
  @Input() location!: LocationModel;
}
