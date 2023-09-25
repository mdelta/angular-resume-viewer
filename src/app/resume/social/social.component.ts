import { Component, Input } from '@angular/core';
import { SocialMedia } from 'src/model/socialmedia.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @Input() items!: SocialMedia[];
}
