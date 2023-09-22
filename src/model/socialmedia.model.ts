import { faGithub, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export enum SocialMediaProfiles {
  None = '',
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn',
  Xing = 'Xing',
  Credly = 'Credly',
}

export class SocialMedia {
  network = '';
  url = '';
  profileName = '';

  iconComponent: SocialMediaProfiles = SocialMediaProfiles.None;
  faIcon = faLink;

  constructor(item: any) {
    if (item.network) this.network = item.network;
    if (item.url) this.url = item.url;
    if (item.username) this.profileName = item.username;

    switch (this.network) {
      case SocialMediaProfiles.GitHub:
        this.iconComponent = SocialMediaProfiles.GitHub;
        this.faIcon = faGithub;
        break;
      case SocialMediaProfiles.LinkedIn:
        this.iconComponent = SocialMediaProfiles.LinkedIn;
        this.faIcon = faLinkedin;
        break;
      case SocialMediaProfiles.Xing:
        this.iconComponent = SocialMediaProfiles.Xing;
        this.faIcon = faXing;
        break;
      case SocialMediaProfiles.Credly:
        this.iconComponent = SocialMediaProfiles.Credly;
        break;
    }
  }
}
