import { Component, Input } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-linkedin',
  templateUrl: './social-linkedin.component.html',
  styleUrls: ['./social-linkedin.component.scss'],
})
export class SocialLinkedinComponent {
  @Input() url: string = '';
  icon = faLinkedin;
}
