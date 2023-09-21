import { Component, Input } from '@angular/core';
import { faXing } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-xing',
  templateUrl: './social-xing.component.html',
  styleUrls: ['./social-xing.component.scss'],
})
export class SocialXingComponent {
  @Input() url: string = '';
  icon = faXing;
}
