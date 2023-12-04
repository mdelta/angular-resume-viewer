import { faGithub, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export enum SocialMediaProfiles {
  None = '',
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn',
  Xing = 'Xing',
  Credly = 'Credly',
}

export class SocialMediaModel {
  network = '';
  url = '';
  profileName = '';

  iconComponent: SocialMediaProfiles = SocialMediaProfiles.None;
  faIcon = faLink;

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('network' in item && typeof item.network === 'string') this.network = item.network;
    if ('url' in item && typeof item.url === 'string') this.url = item.url;
    if ('username' in item && typeof item.username === 'string') this.profileName = item.username;

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
