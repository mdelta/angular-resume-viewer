export enum SocialMediaProfiles {
  None = '',
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn',
  Xing = 'Xing',
  Credly = 'Credly',
}

export class SocialMedia {
  network: string = '';
  url: string = '';
  name: string = '';

  iconComponent: SocialMediaProfiles = SocialMediaProfiles.None;

  constructor(item: any) {
    if (item.network) this.network = item.network;
    if (item.url) this.url = item.url;
    if (item.name) this.url = item.name;

    switch (this.network) {
      case SocialMediaProfiles.GitHub:
        this.iconComponent = SocialMediaProfiles.GitHub;
        break;
      case SocialMediaProfiles.LinkedIn:
        this.iconComponent = SocialMediaProfiles.LinkedIn;
        break;
      case SocialMediaProfiles.Xing:
        this.iconComponent = SocialMediaProfiles.Xing;
        break;
      case SocialMediaProfiles.Credly:
        this.iconComponent = SocialMediaProfiles.Credly;
        break;
    }
  }
}
