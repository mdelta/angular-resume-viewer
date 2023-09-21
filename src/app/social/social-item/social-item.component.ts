import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaProfiles } from 'src/model/socialmedia.model';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss'],
})
export class SocialItemComponent {
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() icon: SocialMediaProfiles = SocialMediaProfiles.None;

  faIcon: IconDefinition;
  title: string = '';

  constructor() {
    this.faIcon = faLink;
  }

  ngOnInit() {
    if (this.name !== '') {
      this.title = `${this.name}, ${this.icon}`;
    } else {
      this.title = this.icon;
    }

    if (this.icon === SocialMediaProfiles.GitHub) {
      this.faIcon = faGithub;
    } else if (this.icon === SocialMediaProfiles.LinkedIn) {
      this.faIcon = faLinkedin;
    } else if (this.icon === SocialMediaProfiles.Xing) {
      this.faIcon = faXing;
    }
  }
}
