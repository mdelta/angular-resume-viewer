import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/model/socialmedia.model';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss'],
})
export class SocialListComponent {
  @Input() items!: SocialMediaModel[];
}
