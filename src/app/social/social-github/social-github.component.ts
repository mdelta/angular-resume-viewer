import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-github',
  templateUrl: './social-github.component.html',
  styleUrls: ['./social-github.component.scss'],
})
export class SocialGithubComponent {
  @Input() url: string = '';
  icon = faGithub;
}
